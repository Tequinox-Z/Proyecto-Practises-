import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusinessService } from '../../Service/business.service';
import { Business } from '../../../../../../core/Interfaces/business/Business';
import { environment } from '../../../../../../../environments/environment';
import Swal from 'sweetalert2';
import * as mapboxgl from "mapbox-gl";


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

  selectTutor: boolean = false;

  mapbox = mapboxgl as typeof mapboxgl;
  map: mapboxgl.Map | null = null;
  showSaveUbication = false;

  business!: Business;

  ngOnInit(): void {
    this.mapbox.accessToken = environment.mapBoxToken;

    this.loadBusiness();
  }


  loadUbication() {
    this.businessService.getUbication(this.business).subscribe({
      next: (ubication) => {
        this.business.location = ubication;
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

  loadBusiness() {
    let cif = this.rutaActiva.snapshot.params['cif'];

    this.businessService.getBusiness(cif).subscribe({
      next: (business) => {
        this.business = business;
        this.loadMap(business);
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
        this.loadUbication();
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
      inputValue: this.business.numberOfStudents, 
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
            this.loadUbication();
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
          this.loadUbication();
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



  loadMap(business: Business) {
    this.businessService.getUbication(business).subscribe({
        next: (location :any) => {
          this.business.location = location;

          this.map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/light-v10",
            zoom: 15,
            center: [location.longitude!, location.latitude!],
          });


          let marker = new mapboxgl.Marker({
            draggable: true,
            color: "#ff8000",
          })
            .setLngLat([
              location.longitude!,
              location.latitude!,
            ])
            .addTo(this.map!);

          marker.on("drag", (event: any) => {

            event!.target._lngLat.lat;
            event!.target._lngLat.lng;

            this.business.location!.latitude = event!.target._lngLat.lat;
            this.business.location!.longitude = event!.target._lngLat.lng;

            this.showSaveUbication = true;
          });
        },
        error: (responseError: any) => {
          Swal.fire({                                                         
            icon: 'error',
            title: 'Oops...',
            text: ((responseError.error.mensaje == undefined)? 'Servidor no disponible' : responseError.error.mensaje),
          })
        }
    });
  }


  updateLocation() {
    this.businessService.editUbication(this.business).subscribe({
      next: () => {
        this.showSaveUbication = false;
        Swal.fire({                                                         
          icon: 'success',
          title: '¡Guardado!'
        })
      },
      error: (responseError) => {
        Swal.fire({                                                         
          icon: 'error',
          title: 'Oops...',
          text: ((responseError.error.mensaje == undefined)? 'Servidor no disponible' : responseError.error.mensaje),
        })
      }
    })
  }


  addTutor(dni: any) {
    console.log(dni);
  }


  closeAll() {
    this.selectTutor = false;
  }
}
