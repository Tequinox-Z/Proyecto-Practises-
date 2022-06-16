import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusinessService } from '../../Service/business.service';
import { Business } from '../../../../../../core/Interfaces/business/Business';
import { environment } from '../../../../../../../environments/environment';
import Swal from 'sweetalert2';
import * as mapboxgl from "mapbox-gl";
import { UserService } from '../../../../Services/UserService/user.service';


@Component({
  selector: 'app-edit-business',
  templateUrl: './edit-business.component.html',
  styleUrls: ['./edit-business.component.css']
})
export class EditBusinessComponent implements OnInit {

  constructor(
    private rutaActiva: ActivatedRoute,
    private businessService: BusinessService,
    private router: Router,
    private userSrv: UserService
  ) { }

  selectTutor: boolean = false;

  mapbox = mapboxgl as typeof mapboxgl;
  map: mapboxgl.Map | null = null;
  showSaveUbication = false;
  isAdmin :boolean = false;

  business!: Business;

  ngOnInit(): void {
    this.mapbox.accessToken = environment.mapBoxToken;

    if (this.userSrv.getPerson()?.rol + "" == "ROLE_ADMIN") {
      this.isAdmin = true;
    }

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
    });
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
      showCancelButton: true,
      
      confirmButtonText: 'Cambiar',
      cancelButtonText: "Cancelar",
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.value.trim().length == 0) {
        Swal.showValidationMessage("Indique un nombre válido");
      }
      else {
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
            draggable: this.isAdmin,
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
    this.businessService.setBusinessToTutor(dni, this.business).subscribe({
      next: () => {
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


  closeAll() {
    this.selectTutor = false;
  }
}
