import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusinessService } from '../../Service/business.service';
import { Business } from '../../../../../../core/Interfaces/business/Business';
import { environment } from '../../../../../../../environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-business',
  templateUrl: './edit-business.component.html',
  styleUrls: ['./edit-business.component.css']
})
export class EditBusinessComponent implements OnInit {

  constructor(
    private rutaActiva: ActivatedRoute,
    private businessService: BusinessService,
    private router: Router
  ) { }


  business!: Business;

  ngOnInit(): void {
    this.loadBusiness();
  }


  loadBusiness() {
    let cif = this.rutaActiva.snapshot.params['cif'];

    this.businessService.getBusiness(cif).subscribe({
      next: (business) => {
        this.business = business;
      },
      error: () => {
        history.back();
      }
    })
  }

  changeImage(image: string) {
    this.business.image = environment.serverFileAddress + "/files/" + image;

    this.businessService.editBusiness(this.business).subscribe({
      next: (business) => {
        this.business = business;
      },
      error: (response) => {
        Swal.fire({                                                                     
          icon: 'error',
          title: 'Oops...',
          text: ((response.error.mensaje == undefined)? 'Servidor no disponible' : response.error.mensaje),
        });
      }
    }).unsubscribe();
  }



  editNumberOfStudents() {
    Swal.fire({
      title: 'Indique número de estudiantes que se pueden matricular este año',
      input: 'number',
      inputAttributes: {
        autocapitalize: 'on',
        min: "0"
      },
      showCancelButton: true,
      
      confirmButtonText: 'Cambiar',
      cancelButtonText: "Cancelar",
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {

      if (!isNaN(result.value!)) {
        this.business.numberOfStudents = parseInt(result.value!);

        this.businessService.editBusiness(this.business).subscribe({
          next: (business) => {
            this.business = business;
          },
          error: (response) => {
            Swal.fire({                                                                     
              icon: 'error',
              title: 'Oops...',
              text: ((response.error.mensaje == undefined)? 'Servidor no disponible' : response.error.mensaje),
            });
          }
        });
      }

    })

  }



  editName() {
    Swal.fire({
      title: 'Indique nuevo nombre',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'on'
      },
      preConfirm: (name: string) => {
        if (name.trim().length == 0) {
          Swal.showValidationMessage("Indique un nombre válido");
        }
      },

      showCancelButton: true,
      
      confirmButtonText: 'Cambiar',
      cancelButtonText: "Cancelar",
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      this.business.name = result.value!;

      this.businessService.editBusiness(this.business).subscribe({
        next: (business) => {
          this.business = business;
        },
        error: (response) => {
          Swal.fire({                                                                     
            icon: 'error',
            title: 'Oops...',
            text: ((response.error.mensaje == undefined)? 'Servidor no disponible' : response.error.mensaje),
          });
        }
      })
    }
  )

  }

}
