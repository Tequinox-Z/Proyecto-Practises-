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

  newBusiness : Business = {};

  formGroup!: FormGroup;
  page: number = 1;
  showNext: boolean = true;
  showBack: boolean = true;
  mapbox = (mapboxgl as typeof mapboxgl);
  map: mapboxgl.Map | null = null;
  marker: any;
  finish: boolean = false;
  serverStep: number = 0; 

  location: Location = {};

  ngOnInit(): void {
    this.dashboardSvr.setTitle("Nueva empresa");
    this.mapbox.accessToken = environment.mapBoxToken;
    this.buildForm();
  }


  private buildForm() {
    this.formGroup = this.formBuilder.group({
        name:  ['', [Validators.required]],
        numberOfStudents: ['', [Validators.required]],
        cif: ['', [Validators.required, Validators.pattern("[A-Za-z]{1}[0-9]{8}")
        ], [this.businessSvr]]
    });
  }

  get existBusiness() {

    let errors = this.formGroup.get('cif')?.errors!;
      
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


  setFileName(event: Event) {
    this.newBusiness.image = environment.serverFileAddress + "/files/" + event;
  }

  showMap() {
    this.page = this.page + 1;
    
    navigator.geolocation.getCurrentPosition((data) => {

      let markerLocation :Location = {};

      if (this.location.longitude != null && this.location.latitude != null) {
        markerLocation = this.location;
      }
      else {
        markerLocation.latitude = data.coords.latitude;
        markerLocation.longitude = data.coords.longitude;
      }

      
      this.map = new mapboxgl.Map({
        container: 'mapa',
        style: "mapbox://styles/mapbox/light-v10",
        zoom: 15,
        center: [markerLocation.longitude!, markerLocation.latitude!]
      });
      
      this.marker = new mapboxgl.Marker({
        color: "#ff8000"
      });
      
      if (this.location.longitude != null && this.location.latitude != null) {
        this.marker.setLngLat([markerLocation.longitude!, markerLocation.latitude!]).addTo(this.map);  
      }

      this.map.on('click', this.add_marker.bind(this));

      this.map.addControl(new mapboxgl.NavigationControl());
      this.map.addControl(new mapboxgl.FullscreenControl());

    });
  }

  add_marker(event: any) {
    let coordinates = event.lngLat;

    this.location.latitude = coordinates.lat;
    this.location.longitude = coordinates.lng;

    this.marker.setLngLat(coordinates).addTo(this.map);
  }


  sendData() {
    this.page = this.page + 1;

    let image = this.newBusiness.image;
    this.newBusiness = this.formGroup.value;
    this.newBusiness.image = image;
    
    this.businessSvr.createBusiness(this.newBusiness).subscribe({
      next: (business) => {
        this.serverStep++;
        this.businessSvr.setUbication(business, this.location).subscribe({
          next: () => {
            this.serverStep++;
            this.finish = true;
          },
          error: (response) => {
            Swal.fire({                                                                     
              icon: 'error',
              title: 'Oops...',
              text: ((response.error.mensaje == undefined)? 'Servidor no disponible' : response.error.mensaje),
            })
          }
        });
      },
      error: (response) => {
            Swal.fire({                                                                     
              icon: 'error',
              title: 'Oops...',
              text: ((response.error.mensaje == undefined)? 'Servidor no disponible' : response.error.mensaje),
            })
      }
    })
  }
}