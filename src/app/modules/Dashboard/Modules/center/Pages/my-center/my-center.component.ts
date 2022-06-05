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

@Component({
  selector: 'app-my-center',
  templateUrl: './my-center.component.html',
  styleUrls: ['./my-center.component.css']
})
export class MyCenterComponent implements OnInit {

  public school!: School;
  public briefing !: Briefing;
  mapbox = mapboxgl as typeof mapboxgl;
  map: mapboxgl.Map | null = null;
  showSaveUbication = false;
  

  formGroup!: FormGroup;



  constructor(
    private centerSrv: CenterService,
    private router: Router,
    private route: ActivatedRoute,
    private dashboardSvr: DashboardService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {




    this.mapbox.accessToken = environment.mapBoxToken;

    this.centerSrv.getCenterOfAdministrator()
    .subscribe(
      {
        next: (response: School) => {

          this.formGroup = this.formBuilder.group({
            name:  [response.name, [Validators.required]],
            address: [response.address, [Validators.required]],
            password: [response.password, [Validators.required, Validators.minLength(8)]],
            openingTime: [response.openingTime, [Validators.required, Validators.max(10)]],
            closingTime: [response.closingTime, [Validators.required, Validators.min(12)]]
        });


          this.dashboardSvr.setTitle(response.name!);
          
          this.centerSrv.briefing(response).subscribe({
            next: (newBriefing : Briefing) => {
              this.briefing = newBriefing;
            },
            error: (responseError) => {
              Swal.fire({                                                         
                icon: 'error',
                title: 'Oops...',
                text: ((responseError.error.mensaje == undefined)? 'Servidor no disponible' : responseError.error.mensaje),
              })
            }
          });

          this.loadMap(response);

          this.school = response;
        },
        error: (error) => {
          this.router.navigate(["../centers"], { relativeTo: this.route });           
        }
      }
    )
  }


  setFileName(event: Event) {
    this.school.image = environment.serverFileAddress + event;
    this.centerSrv.updateCenter(this.school).subscribe({
      error: (responseError) => {
        Swal.fire({                                                         
          icon: 'error',
          title: 'Oops...',
          text: ((responseError.error.mensaje == undefined)? 'Servidor no disponible' : responseError.error.mensaje),
        })
      }
    })
  }


  loadMap(school: School) {
    this.centerSrv.getUbication(school).subscribe({
        next: (location: Location) => {
          this.school.location = location;

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
            console.log(event);

            event!.target._lngLat.lat;
            event!.target._lngLat.lng;

            this.school.location!.latitude = event!.target._lngLat.lat;
            this.school.location!.longitude = event!.target._lngLat.lng;

            this.showSaveUbication = true;
          });
        },
        error: (responseError) => {
          Swal.fire({                                                         
            icon: 'error',
            title: 'Oops...',
            text: ((responseError.error.mensaje == undefined)? 'Servidor no disponible' : responseError.error.mensaje),
          })
        }
    });
  }


  updateLocation() {
    this.centerSrv.updateLocation(this.school).subscribe({
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


  updateSchool() {
    let id = this.school.id;
    let image = this.school.image;

    let newSchool: School = this.formGroup.value;

    newSchool.image = image;
    newSchool.id = id;

    this.centerSrv.updateCenter(newSchool).subscribe({
      next: (school: School) => {
        this.school = school;
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
}
