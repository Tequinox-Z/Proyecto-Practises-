import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusinessService } from '../../Service/business.service';
import { Business } from '../../../../../../core/Interfaces/business/Business';
import { environment } from '../../../../../../../environments/environment';
import Swal from 'sweetalert2';
import * as mapboxgl from "mapbox-gl";
import { UserService } from '../../../../Services/UserService/user.service';


// Página de editar empresa

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

  selectTutor: boolean = false;            // Modal de selección de tutor

  mapbox = mapboxgl as typeof mapboxgl;    // Constructor de mapa
  map: mapboxgl.Map | null = null;         // Mapa
  showSaveUbication = false;               // Indica si mostrar el botón de guardar
  isAdmin :boolean = false;                // Indica si es administrador

  business!: Business;                     // Empresa actual

  ngOnInit(): void {

    // Establecemos el token 

    this.mapbox.accessToken = environment.mapBoxToken;

    // Comprobamos si es administrador

    if (this.userSrv.getPerson()?.rol + "" == "ROLE_ADMIN") {
      this.isAdmin = true;
    }

    // Cargamos la empresa

    this.loadBusiness();
  }


  /**
   * Carga la ubicación de la empresa
   */
  loadUbication() {
    let request = this.businessService.getUbication(this.business).subscribe({
      next: (ubication) => {
        request.unsubscribe();
        this.business.location = ubication;      // Asignamos la empresa
      },
      error: (response) => {
        request.unsubscribe();

        // Lanzamos error

        Swal.fire({                                                                     
          icon: 'error',
          title: 'Oops...',
          text: ((response.error.mensaje == undefined)? 'Servidor no disponible' : response.error.mensaje),
        });
      }
    })
  }

  /**
   * Carga la empresa
   */
  loadBusiness() {

    // Obtenemos el cif

    let cif = this.rutaActiva.snapshot.params['cif'];

    // Cargamos la empresa

    let request = this.businessService.getBusiness(cif).subscribe({
      next: (business) => {
        request.unsubscribe();

        this.business = business;          // Asignamos la empresa
        this.loadMap(business);            // Cargamos el mapa
      },
      error: () => {
        request.unsubscribe();

        history.back();                    // En caso de error volvemos atrás
      }
    })
  }

  /**
   * Cambia la imagen de la empresa
   * @param image Nueva imagen
   */
  changeImage(image: string) {
    
    // Establecemos la ruta de la imagen

    this.business.image = environment.serverFileAddress + "/files/" + image;

    // Editamos la imagen

    let request = this.businessService.editBusiness(this.business).subscribe({
      next: (business) => {

        request.unsubscribe();

        // Establecemos la nueva empresa

        this.business = business;

        // Cargamos el mapa

        this.loadUbication();
      },
      error: (response) => {
        request.unsubscribe();

        // Indicamos error

        Swal.fire({                                                                     
          icon: 'error',
          title: 'Oops...',
          text: ((response.error.mensaje == undefined)? 'Servidor no disponible' : response.error.mensaje),
        });
      }
    });
  }

  /**
   * Edita el número de estudiantes
   */
  editNumberOfStudents() {

    // Pedimos el número de estudiantes

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

      // Si es válido continuamos

      if (!isNaN(result.value!)) {

        // Convertimos a entero

        this.business.numberOfStudents = parseInt(result.value!);

        let request = this.businessService.editBusiness(this.business).subscribe({
          next: (business) => {

            request.unsubscribe();

            // Asignamos la empresa y recargamos la ubicación

            this.business = business;
            this.loadUbication();
          },
          error: (response) => {
            request.unsubscribe();

            // Mostramos error

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


  /**
   * Edita en nombre de la empresa
   */
  editName() {

    // Pedimos el nombre

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
  
      // Comprobamos si es válido

      if (result.value.trim().length == 0) {
        Swal.showValidationMessage("Indique un nombre válido");
      }
      else {

        // Establecemos el nombre

        this.business.name = result.value!;

        // Editamos

        let request = this.businessService.editBusiness(this.business).subscribe({
          next: (business) => {
            request.unsubscribe();

            // Establecemos la empresa y cargamos la ubicación

            this.business = business;
            this.loadUbication();
          },
          error: (response) => {

            request.unsubscribe();
            
            // Mostramos error
            
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


  /**
   * Carga el mapa
   * @param business
   */
  loadMap(business: Business) {

    // Obtenemos la ubicación

    let request = this.businessService.getUbication(business).subscribe({
        next: (location :any) => {
          request.unsubscribe();

          // La establecemos

          this.business.location = location;

          // Cargamos el mapa

          this.map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/light-v10",
            zoom: 15,
            center: [location.longitude!, location.latitude!],
          });

          // Añadimos el marcador

          let marker = new mapboxgl.Marker({
            draggable: this.isAdmin,
            color: "#ff8000",
          })
            .setLngLat([
              location.longitude!,
              location.latitude!,
            ])
            .addTo(this.map!);

          // Añadimos un evento al arrastrar

          marker.on("drag", (event: any) => {

            event!.target._lngLat.lat;
            event!.target._lngLat.lng;

            // Establecemos las nuevas coordenadas

            this.business.location!.latitude = event!.target._lngLat.lat;
            this.business.location!.longitude = event!.target._lngLat.lng;

            // Mostramos el botón de guardar
            
            this.showSaveUbication = true;
          });
        },
        error: (responseError: any) => {

          request.unsubscribe();

          // Mostramos el error

          Swal.fire({                                                         
            icon: 'error',
            title: 'Oops...',
            text: ((responseError.error.mensaje == undefined)? 'Servidor no disponible' : responseError.error.mensaje),
          })
        }
    });
  }

  /**
   * Actualiza la ubicación
   */
  updateLocation() {
    
    //Lanzamos la petición

    let request = this.businessService.editUbication(this.business).subscribe({
      next: () => {
        request.unsubscribe();

        // Ocultamos el boton

        this.showSaveUbication = false;
        
        // Mostramos el mensaje
        
        Swal.fire({                                                         
          icon: 'success',
          title: '¡Guardado!'
        })
      },
      error: (responseError) => {
        request.unsubscribe();

        // Mostramos error

        Swal.fire({                                                         
          icon: 'error',
          title: 'Oops...',
          text: ((responseError.error.mensaje == undefined)? 'Servidor no disponible' : responseError.error.mensaje),
        })
      }
    })
  }

  /**
   * Añade un tutor
   * @param dni Dni
   */
  addTutor(dni: any) {
    let request = this.businessService.setBusinessToTutor(dni, this.business).subscribe({
      next: () => {
        request.unsubscribe();

        Swal.fire({                                                         
          icon: 'success',
          title: '¡Guardado!'
        })
      },
      error: (responseError) => {

        request.unsubscribe();

        Swal.fire({                                                         
          icon: 'error',
          title: 'Oops...',
          text: ((responseError.error.mensaje == undefined)? 'Servidor no disponible' : responseError.error.mensaje),
        })
      }
    })
  }

  /**
   * Cierra todos los modales
   */
  closeAll() {
    this.selectTutor = false;
  }
}
