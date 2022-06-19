import { Location } from './../../../../../../core/Interfaces/Location/Location';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../../Services/Dashboard-service/dashboard.service';
import { School } from '../../../../../../core/Interfaces/school/school';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../../../../../environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { CenterService } from '../../Service/center.service';
import Swal from 'sweetalert2';


// Página de nuevo centro


@Component({
  selector: 'app-new-center',
  templateUrl: './new-center.component.html',
  styleUrls: ['./new-center.component.css']
})
export class NewCenterComponent implements OnInit {

  constructor(    
      private dashboardSvr: DashboardService,
      private formBuilder: FormBuilder,
      private centerSvr: CenterService
  ) { }

  newSchool : School = {};                      // Nuevo centro  
  formGroup!: FormGroup;                        // Constructor de formulario
  page: number = 1;                             // Número de página
  showNext: boolean = true;                     // Mostrar botón de siguiente
  showBack: boolean = true;                     // Mostrar botón atrás
  mapbox = (mapboxgl as typeof mapboxgl);       // Constructor de mapa
  map: mapboxgl.Map | null = null;              // Mapa
  marker: any;                                  // Marcador en mapa
  finish: boolean = false;                      // Finalizado
  serverStep: number = 0;                       // Paso en servidor

  location: Location = {};                      // Localización

  ngOnInit(): void {

    // Establecemmos el título
    
    this.dashboardSvr.setTitle("Nuevo centro");
    
    // Establecemos el token

    this.mapbox.accessToken = environment.mapBoxToken;
    
    // Construimos el formulario

    this.buildForm();
  }

  // Construye el formulario

  private buildForm() {
    this.formGroup = this.formBuilder.group({
        name:  ['', [Validators.required]],
        address: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        openingTime: ['', [Validators.required, Validators.max(10)]],
        closingTime: ['', [Validators.required, Validators.min(12)]]
    });
  }

  // Establece la nueva imagen para el centro

  setFileName(event: Event) {
    this.newSchool.image = environment.serverFileAddress + "/files/" + event;
  }

  // Muestra el mapa

  showMap() {

    // Incrementamos la página

    this.page = this.page + 1;    
    
    // Obtenemos la localización

    navigator.geolocation.getCurrentPosition((data) => {

      // Creamos un marcador

      let markerLocation :Location = {};

      // Comprobamos si las posiciones están establecidas

      if (this.location.longitude != null && this.location.latitude != null) {
        markerLocation = this.location;
      }
      else {
        markerLocation.latitude = data.coords.latitude;
        markerLocation.longitude = data.coords.longitude;
      }

      // Creamos el mapa
      
      this.map = new mapboxgl.Map({
        container: 'mapa',
        style: "mapbox://styles/mapbox/light-v10",
        zoom: 15,
        center: [markerLocation.longitude!, markerLocation.latitude!]
      });

      // Creamos el marcador
      
      this.marker = new mapboxgl.Marker({
        color: "#ff8000"
      });

      // Establecemos las posiciones
      
      if (this.location.longitude != null && this.location.latitude != null) {
        this.marker.setLngLat([markerLocation.longitude!, markerLocation.latitude!]).addTo(this.map);  
      }

      // Añadimos el evento click y añadimos los controles

      this.map.on('click', this.add_marker.bind(this));

      this.map.addControl(new mapboxgl.NavigationControl());
      this.map.addControl(new mapboxgl.FullscreenControl());

    });
  }

  // Crea el marcador

  add_marker(event: any) {
    let coordinates = event.lngLat;

    this.location.latitude = coordinates.lat;
    this.location.longitude = coordinates.lng;

    this.marker.setLngLat(coordinates).addTo(this.map);
  }

  // Envía los datos y crea el centro

  sendData() {

    // Aumentamos la página

    this.page = this.page + 1;

    // Establecemos los datos

    let image = this.newSchool.image;
    this.newSchool = this.formGroup.value;
    this.newSchool.image = image;

    this.newSchool.openingTime = this.newSchool.openingTime;
    this.newSchool.closingTime = this.newSchool.closingTime;

    let request = this.centerSvr.createCenter(this.newSchool).subscribe({
      next: (school: School) => {

        request.unsubscribe();
        
        // Aumentamos el paso del servidor

        this.serverStep++; 

        // Establecemos la localización

        let request2 = this.centerSvr.setLocation(school, this.location).subscribe({
          next: (value: Location) => {
            request2.unsubscribe();

            // Aumentamos el paso

            this.serverStep++;

            // Establecemos el administrador

            let request3 = this.centerSvr.setCurrentAdministrator(school).subscribe({
              next: (value: School) => {

                request3.unsubscribe();

                // Aumentamos el paso e indicamos el fin

                this.serverStep++;
                this.finish = true;
              },
              error: (response) => {

                request3.unsubscribe();

                // Mostramos el error

                Swal.fire({                                                                     
                  icon: 'error',
                  title: 'Oops...',
                  text: ((response.error.mensaje == undefined)? 'Servidor no disponible' : response.error.mensaje),
                })
              }
            })
          },
          error: (response) => {

            request2.unsubscribe();

            // Mostramos el error
            Swal.fire({                                                                     
              icon: 'error',
              title: 'Oops...',
              text: ((response.error.mensaje == undefined)? 'Servidor no disponible' : response.error.mensaje),
            })
          }
        });
      },
      error: (response) => {

        request.unsubscribe();
        
        // Mostramos el error

        Swal.fire({                                                                     
          icon: 'error',
          title: 'Oops...',
          text: ((response.error.mensaje == undefined)? 'Servidor no disponible' : response.error.mensaje),
        })
      }
    });
  }
}