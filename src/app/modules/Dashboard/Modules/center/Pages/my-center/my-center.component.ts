import { Component, OnInit } from '@angular/core';
import { CenterService } from '../../Service/center.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DashboardService } from '../../../../Services/Dashboard-service/dashboard.service';
import { School } from '../../../../../../core/Interfaces/school/school';
import { Briefing } from '../../../../../../core/Interfaces/briefing/briefing';
import Swal from 'sweetalert2';
import { Location } from '../../../../../../core/Interfaces/Location/Location';
import * as mapboxgl from "mapbox-gl";
import { environment } from '../../../../../../../environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


// Página de mi centro

@Component({
  selector: 'app-my-center',
  templateUrl: './my-center.component.html',
  styleUrls: ['./my-center.component.css']
})
export class MyCenterComponent implements OnInit {

  public school!: School;                                // Centro
  public briefing !: Briefing;                           // Resumen de datos
  mapbox = mapboxgl as typeof mapboxgl;                  // Constructor de mapa
  map: mapboxgl.Map | null = null;                       // Mapa
  showSaveUbication = false;                             // Muestra el botón de guardar mapa
  


  formGroup!: FormGroup;                                 // Constructor de formulario


  constructor(
    private centerSrv: CenterService,
    private router: Router,
    private route: ActivatedRoute,
    private dashboardSvr: DashboardService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {


    // Establecemos el token

    this.mapbox.accessToken = environment.mapBoxToken;                

    // Lanzamos la petición

    let request = this.centerSrv.getCenterOfAdministrator()
    .subscribe(
      {
        next: (response: School) => {
          request.unsubscribe();

          // Construimos el formulario

          this.formGroup = this.formBuilder.group({
            name:  [response.name, [Validators.required]],
            address: [response.address, [Validators.required]],
            password: [response.password, [Validators.required, Validators.minLength(8)]],
            openingTime: [response.openingTime, [Validators.required, Validators.max(10)]],
            closingTime: [response.closingTime, [Validators.required, Validators.min(12)]]
        });

          // Establecemos el título

          this.dashboardSvr.setTitle(response.name!);
          
          let request2 = this.centerSrv.briefing(response).subscribe({
            next: (newBriefing : Briefing) => {
              request2.unsubscribe();
            
              // Almacenamos los datos y cargamos el mapa

              this.briefing = newBriefing;
              this.loadMap(response);
            },
            error: (responseError) => {
              request2.unsubscribe();

              // Mostramos error

              Swal.fire({                                                         
                icon: 'error',
                title: 'Oops...',
                text: ((responseError.error.mensaje == undefined)? 'Servidor no disponible' : responseError.error.mensaje),
              })
            }
          });

          this.school = response;        // Establecemos el centro
        },
        error: (error) => {

          request.unsubscribe();
          // Nos dirigimos a la ruta superior
          
          this.router.navigate(["../centers"], { relativeTo: this.route });           
        }
      }
    )
  }

  //Establece una nueva imagen al centro

  setFileName(event: Event) {
    // Establecemos la imagen

    this.school.image = environment.serverFileAddress + "/files/" + event;    
    
    // Actualizamos la imagen

    let request = this.centerSrv.updateCenter(this.school).subscribe({
      error: (responseError) => {
        request.unsubscribe();

        // En caso de error mostramos el error

        Swal.fire({                                                         
          icon: 'error',
          title: 'Oops...',
          text: ((responseError.error.mensaje == undefined)? 'Servidor no disponible' : responseError.error.mensaje),
        })
      }
    })
  }

  /**
     Carga el mapa
   */
  loadMap(school: School) {

    // Obtenemos la ubicación del centro

    let request = this.centerSrv.getUbication(school).subscribe({
        next: (location: Location) => {

          request.unsubscribe();

          this.school.location = location;        // Establecemos la ubicación

          // Creamos el mapa

          this.map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/light-v10",
            zoom: 15,
            center: [location.longitude!, location.latitude!],
          });


          // Creamos el marcador

          let marker = new mapboxgl.Marker({
            draggable: true,
            color: "#ff8000",
          })
            .setLngLat([
              location.longitude!,
              location.latitude!,
            ])
            .addTo(this.map!);

          // Añadimos el evento ante el cambio

          marker.on("drag", (event: any) => {

            event!.target._lngLat.lat;
            event!.target._lngLat.lng;

            this.school.location!.latitude = event!.target._lngLat.lat;
            this.school.location!.longitude = event!.target._lngLat.lng;

            this.showSaveUbication = true;
          });
        },
        error: (responseError) => {

          request.unsubscribe();
          // En caso de error indicamos el mismo
          Swal.fire({                                                         
            icon: 'error',
            title: 'Oops...',
            text: ((responseError.error.mensaje == undefined)? 'Servidor no disponible' : responseError.error.mensaje),
          })
        }
    });
  }


  // Actualiza la ubicación

  updateLocation() {

    // Lanzamos la petición

    let request = this.centerSrv.updateLocation(this.school).subscribe({
      next: () => {

        request.unsubscribe();
        
        // Ocultamos el botón de guardar
        
        this.showSaveUbication = false;        

        // Indicamos el mensaje

        Swal.fire({                                                         
          icon: 'success',
          title: '¡Guardado!'
        })
      },
      error: (responseError) => {

        request.unsubscribe();

        // Indicamos el error

        Swal.fire({                                                         
          icon: 'error',
          title: 'Oops...',
          text: ((responseError.error.mensaje == undefined)? 'Servidor no disponible' : responseError.error.mensaje),
        })
      }
    })
  }

  /**
   * Actualiza los datos del centro
   */
  updateSchool() {
    
    // Establecemos el id y la imagen
    
    let id = this.school.id;
    let image = this.school.image;

    // Creamos una nueva escuela

    let newSchool: School = this.formGroup.value;

    // Establecemos la imagen y el id

    newSchool.image = image;
    newSchool.id = id;

    // Actualizamos

    let request = this.centerSrv.updateCenter(newSchool).subscribe({
      next: (school: School) => {
        request.unsubscribe();

        // Establecemos los datos y mostramos un mensaje
        
        this.school = school;
        Swal.fire({                                                         
          icon: 'success',
          title: '¡Guardado!'
        })
      },
      error: (responseError) => {

        request.unsubscribe();

        // Mostramos el mensaje de error

        Swal.fire({                                                         
          icon: 'error',
          title: 'Oops...',
          text: ((responseError.error.mensaje == undefined)? 'Servidor no disponible' : responseError.error.mensaje),
        })
      }

    })
    
  }
}
