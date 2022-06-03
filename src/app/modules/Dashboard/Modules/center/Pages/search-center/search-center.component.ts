import { Component, OnInit } from '@angular/core';
import { CenterService } from '../../Service/center.service';
import { School } from '../../../../../../core/Interfaces/school/school';
import Swal from 'sweetalert2';
import { environment } from '../../../../../../../environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { Location } from '../../../../../../core/Interfaces/Location/Location';

@Component({
  selector: 'app-search-center',
  templateUrl: './search-center.component.html',
  styleUrls: ['./search-center.component.css']
})
export class SearchCenterComponent implements OnInit {

  constructor(
    private centerSvr: CenterService
  ) { }

  mapbox = (mapboxgl as typeof mapboxgl);
  map: mapboxgl.Map | null = null;

  centers: School[] = [];
  locations: Location[] = [];

  mapMode: boolean = false;

  ngOnInit(): void {
    this.mapbox.accessToken = environment.mapBoxToken;

    this.centerSvr.getAllCenters().subscribe({
      next: (schools: any) => {
        this.centers = schools;
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


  buscar(name: String) {
    this.centerSvr.getCentersByName(name).subscribe({
      next: (schools: any) => {
        this.centers = schools;
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

  showMap() {

    this.mapMode = true;

    this.centerSvr.getAllLocations().subscribe({
      next: (locations: any) => {

        this.locations = locations;

        navigator.geolocation.getCurrentPosition((data) => {
            this.map = new mapboxgl.Map({
              container: 'mapCenters',
              style: "mapbox://styles/mapbox/light-v10",
              zoom: 15,
              center: [data.coords.longitude, data.coords.latitude]
            });


            locations.forEach((currentLocation: Location) => {
              const newMarker = document.createElement('div');
              newMarker.className = 'marker';
                
              new mapboxgl.Marker(newMarker).setLngLat([currentLocation.longitude! , currentLocation.latitude!]).addTo(this.map!);

            });
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
