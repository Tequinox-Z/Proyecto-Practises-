import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DegreeService } from '../../Service/degree.service';
import { ProfessionalDegree } from '../../../../../../core/Interfaces/ProfessionalDegree/ProfessionalDegree';
import Swal from 'sweetalert2';
import { UserService } from '../../../../Services/UserService/user.service';

@Component({
  selector: 'app-degree-business',
  templateUrl: './degree-business.component.html',
  styleUrls: ['./degree-business.component.css']
})
export class DegreeBusinessComponent implements OnInit {

  constructor(
    private rutaActiva: ActivatedRoute,
    private degreeSrv: DegreeService,
    public userSrv: UserService
  ) { }


  isAdmin : boolean = false;

  selectBusiness:boolean = false;

  currentDegree!: ProfessionalDegree;
  editMode: boolean = false;

  ngOnInit(): void {
    if (this.userSrv.getPerson()?.rol?.toString() == "ROLE_ADMIN") {
      this.isAdmin = true;
   }
    this.loadDegree();
  }


  addBusiness(cif: string) {
    this.selectBusiness = false;

    this.degreeSrv.addBusiness(this.currentDegree, cif).subscribe({
      next: () => {
        this.loadDegree();
      },
      error: (response) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text:  response.error.mensaje
        })
      }
    })
  }


  loadDegree() {
    let idDegree = this.rutaActiva.snapshot.params['idDegree'];

    this.degreeSrv.getByDegreeOnly(idDegree).subscribe({
      next: (degree: any) => {
        this.currentDegree = degree;

        this.degreeSrv.getBusinessFromDegree(degree).subscribe({
          next: (business: any) => {
            this.currentDegree.businesses = business;
          }
        });
      }
    });
  }



  quitBusiness(cif: string) {
    Swal.fire({
      title: '¿Quitar empresa?',
      text: "Dejará de estar disponible para ser elegida",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "Cancelar",
      confirmButtonText: 'Quitar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.degreeSrv.quitFromDegree(this.currentDegree, cif).subscribe({
          next: () => {
            this.loadDegree();
          }
        })
      }
    })
  }

}
