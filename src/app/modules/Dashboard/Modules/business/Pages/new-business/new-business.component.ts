import { Location } from '../../../../../../core/Interfaces/Location/Location';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../../Services/Dashboard-service/dashboard.service';
import { School } from '../../../../../../core/Interfaces/school/school';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@material-ui/core';
import { FileUploadService } from '../../../../../../shared/Services/FileUpload/file-upload.service';
import { environment } from '../../../../../../../environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { catchError } from 'rxjs';
import Swal from 'sweetalert2';
import { BusinessService } from '../../Service/business.service';
import { Business } from '../../../../../../core/Interfaces/business/Business';

@Component({
  selector: 'app-new-business',
  templateUrl: './new-business.component.html',
  styleUrls: ['./new-business.component.css']
})
export class NewBusinessComponent implements OnInit {

  constructor(    
      private dashboardSvr: DashboardService,
      private formBuilder: FormBuilder,
      private businessSvr: BusinessService
  ) { }

  newBusiness : Business = {};                      // Nueva empresa

  formGroup!: FormGroup;                            // Constructor de formulario
  page: number = 1;                                 // Contador de página
  showNext: boolean = true;                         // ¿Mostrar siguiente? 
  showBack: boolean = true;                         // ¿Mostrar atrás?
  mapbox = (mapboxgl as typeof mapboxgl);           // Constructor de mapa
  map: mapboxgl.Map | null = null;                  // Mapa
  marker: any;                                      // Marcador
  finish: boolean = false;                          // ¿Finalizado?
  serverStep: number = 0;                           // Paso en servidor

  location: Location = {};                          // Localización

  ngOnInit(): void {
    this.dashboardSvr.setTitle("Nueva empresa");            // Establecemos el título
    this.mapbox.accessToken = environment.mapBoxToken;      // Indicamos el token del mapa
    this.buildForm();                                       // Construimos el form
  }

  /**
   * Construye el formulario
   */
  private buildForm() {
    this.formGroup = this.formBuilder.group({
        name:  ['', [Validators.required]],
        numberOfStudents: ['', [Validators.required]],
        cif: ['', [Validators.required, Validators.pattern("[A-Za-z]{1}[0-9]{8}")
        ], [this.businessSvr]]
    });
  }
  
  /**
   * Comprueba si existe la empresa
   */
  get existBusiness() {

    let errors = this.formGroup.get('cif')?.errors!;
      
    // Si existe lo indicamos, si no evaluamos el error

    if (errors['exist']) {
      return "Cif registrado";
    }
    else if (errors['pattern']) {
      return "Indique un dni válido";
    }
    else {
      return "";
    }

  }

  /**
   *  Establece el nombre del fichero
   */
  setFileName(event: Event) {
    this.newBusiness.image = environment.serverFileAddress + "/files/" + event;
  }

  /**
   * Muestra el mapa
   */
  showMap() {
    this.page = this.page + 1;                                // Incrementamos la página
    
    navigator.geolocation.getCurrentPosition((data) => {

      // Obtenemos la ubicación y añadimos un marcador

      let markerLocation :Location = {};

      // Asignamos las coordenadas

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

      // Establecemos las coordenadas
      
      if (this.location.longitude != null && this.location.latitude != null) {
        this.marker.setLngLat([markerLocation.longitude!, markerLocation.latitude!]).addTo(this.map);  
      }

      // Añadimos controles y eventos

      this.map.on('click', this.add_marker.bind(this));

      this.map.addControl(new mapboxgl.NavigationControl());
      this.map.addControl(new mapboxgl.FullscreenControl());

    });
  }

  /**
   * Añade un marcador al mapa
   */
  add_marker(event: any) {
    let coordinates = event.lngLat;

    this.location.latitude = coordinates.lat;
    this.location.longitude = coordinates.lng;

    this.marker.setLngLat(coordinates).addTo(this.map);
  }

  /**
   * Envía todos los datos y crea la empresa
   */
  sendData() {
    this.page = this.page + 1;                                  // Incrementamos la página

    // Asignamos los datos

    let image = this.newBusiness.image;                         
    this.newBusiness = this.formGroup.value;                    
    this.newBusiness.image = image;

    // Creamos...
    
    let request = this.businessSvr.createBusiness(this.newBusiness).subscribe({
      next: (business) => {
        request.unsubscribe();

        this.serverStep++;      // Aumentamos el paso
        
        let request2 = this.businessSvr.setUbication(business, this.location).subscribe({
          next: () => {
            request2.unsubscribe();

            this.serverStep++;      // Aumentamos el paso
            this.finish = true;     // Informamos de que ha terminado
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
    })
  }
}