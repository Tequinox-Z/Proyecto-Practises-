import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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


  // Página de Empresas de un ciclo

  constructor(
    private rutaActiva: ActivatedRoute,
    private degreeSrv: DegreeService,
    public userSrv: UserService,
    private router: Router
  ) { }


  isAdmin : boolean = false;                    // Indica si es administrador

  selectBusiness :boolean = false;              // Modal de selección de empresa

  currentDegree!: ProfessionalDegree;           // Ciclo actual
  editMode: boolean = false;                    // Modo edición

  ngOnInit(): void {

    // Comprobamos si es un administrador

    if (this.userSrv.getPerson()?.rol?.toString() == "ROLE_ADMIN") {
      this.isAdmin = true;
   }

   // Leemos el ciclo

    this.loadDegree();
  }


  // Añade una empresa al ciclo

  addBusiness(cif: string) {

    // Ocultamos el modal de empresa

    this.selectBusiness = false;

    // Lo añadimos

    let request = this.degreeSrv.addBusiness(this.currentDegree, cif).subscribe({
      next: () => {

        request.unsubscribe();
        
        // Cargamos el ciclo
        this.loadDegree();
      },
      error: (response) => {
        request.unsubscribe();

        // Mostramos el mensaje

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text:  response.error.mensaje
        })
      }
    })
  }


  // Carga el ciclo actual

  loadDegree() {

    // Leemos el id del ciclo

    let idDegree = this.rutaActiva.snapshot.params['idDegree'];

    // Leemos el ciclo

    let request = this.degreeSrv.getByDegreeOnly(idDegree).subscribe({
      next: (degree: any) => {
        request.unsubscribe();

        // Guardamos el ciclo

        this.currentDegree = degree;

        // Obtenemos la empresa del ciclo

        let request2 = this.degreeSrv.getBusinessFromDegree(degree).subscribe({
          next: (business: any) => {

            request2.unsubscribe();
            
            // Almacenamos la empresa

            this.currentDegree.businesses = business;
          }
        });
      }
    });
  }


  // Quita una empresa

  quitBusiness(cif: string) {

    // Avisamos

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

        // Quitamos la empresa del ciclo

        let request = this.degreeSrv.quitFromDegree(this.currentDegree, cif).subscribe({
          next: () => {
            request.unsubscribe();

            // Leemos de nuevo el ciclo
            
            this.loadDegree();
          }
        })
      }
    })
  }


  viewBusiness(cif: string) {
    this.router.navigateByUrl("/dashboard/business/search-business/edit/" + cif);
  }

}
