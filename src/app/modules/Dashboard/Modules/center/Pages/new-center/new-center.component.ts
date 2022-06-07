import { Location } from './../../../../../../core/Interfaces/Location/Location';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../../Services/Dashboard-service/dashboard.service';
import { School } from '../../../../../../core/Interfaces/school/school';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@material-ui/core';
import { FileUploadService } from '../../../../../../shared/Services/FileUpload/file-upload.service';
import { environment } from '../../../../../../../environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { CenterService } from '../../Service/center.service';
import { catchError } from 'rxjs';
import Swal from 'sweetalert2';

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

  newSchool : School = {};
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
    this.dashboardSvr.setTitle("Nuevo centro");
    this.mapbox.accessToken = environment.mapBoxToken;
    this.buildForm();
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
        name:  ['', [Validators.required]],
        address: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        openingTime: ['', [Validators.required, Validators.max(10)]],
        closingTime: ['', [Validators.required, Validators.min(12)]]
    });
  }


  setFileName(event: Event) {
    this.newSchool.image = environment.serverFileAddress + "/files/" + event;
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

    let image = this.newSchool.image;
    this.newSchool = this.formGroup.value;
    this.newSchool.image = image;

    this.newSchool.openingTime = this.newSchool.openingTime;
    this.newSchool.closingTime = this.newSchool.closingTime;

    this.centerSvr.createCenter(this.newSchool).subscribe({
      next: (school: School) => {

        this.serverStep++;

        this.centerSvr.setLocation(school, this.location).subscribe({
          next: (value: Location) => {
            this.serverStep++;

            this.centerSvr.setCurrentAdministrator(school).subscribe({
              next: (value: School) => {
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
            })
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
    });
  }
}