import { Component, OnInit } from "@angular/core";
import { School } from "../../../../../../core/Interfaces/school/school";
import Swal from "sweetalert2";
import { environment } from "../../../../../../../environments/environment";
import { Location } from "../../../../../../core/Interfaces/Location/Location";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import * as mapboxgl from "mapbox-gl";
import * as MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import { LocationAndSchool } from "../../../../../../core/Interfaces/LocationAndSchool/LocationAndSchool";
import { DashboardService } from "../../../../Services/Dashboard-service/dashboard.service";
import { Router, ActivatedRoute } from '@angular/router';
import { BusinessService } from '../../Service/business.service';
import { Business } from '../../../../../../core/Interfaces/business/Business';
import { LocationAndBusiness } from '../../../../../../core/Interfaces/LocationAndBusiness/LocationAndBusiness';

@Component({
  selector: "app-search-business",
  templateUrl: "./search-business.component.html",
  styleUrls: ["./search-business.component.css"],
})
export class SearchBusinessComponent implements OnInit {
  constructor(
    private businessSvr: BusinessService,
    private dashboardSvr: DashboardService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  mapbox = mapboxgl as typeof mapboxgl;
  map: mapboxgl.Map | null = null;


  locations: LocationAndBusiness[] = [];

  mapMode: boolean = false;

  ngOnInit(): void {
    this.dashboardSvr.setTitle("Empresas");

    this.mapbox.accessToken = environment.mapBoxToken;

    this.businessSvr.getAllLocations().subscribe({
      next: (business: any) => {
        this.locations = business;
      },
      error: (response) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text:
            response.error.mensaje == undefined
              ? "Servidor no disponible"
              : response.error.mensaje,
        });
      },
    });
  }

  buscar(name: String) {
    this.businessSvr.getBusinessByName(name).subscribe({
      next: (business: any) => {
        this.locations = business;
      },
      error: (response) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text:
            response.error.mensaje == undefined
              ? "Servidor no disponible"
              : response.error.mensaje,
        });
      },
    });
  }

  showListOfSchool() {
    this.mapMode = false;
  }

  showMap() {
    this.mapMode = true;

    this.businessSvr.getAllLocations().subscribe({
      next: (locations: any) => {
        this.locations = locations;

        navigator.geolocation.getCurrentPosition((data) => {
          this.map = new mapboxgl.Map({
            container: "mapCenters",
            style: "mapbox://styles/mapbox/light-v10",
            zoom: 15,
            center: [data.coords.longitude, data.coords.latitude],
          });

          this.map.addControl(new mapboxgl.NavigationControl());
          this.map.addControl(new mapboxgl.FullscreenControl());
          this.map.addControl(
            new MapboxGeocoder({
              accessToken: environment.mapBoxToken,
            })
          );

          let searchBox = document.querySelector(
            ".mapboxgl-ctrl-geocoder--input"
          ) as HTMLInputElement;
          searchBox.placeholder = "Buscar";

          locations.forEach((currentLocation: LocationAndBusiness) => {
          
            console.log(currentLocation);
            
            const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
              "<span>" + currentLocation.name + "</span>" + "<div class='enginepop'>" + "</div>"
            );

            new mapboxgl.Marker({
              draggable: false,
              color: "#ff8000",
            })
              .setPopup(popup)
              .setLngLat([
                currentLocation.longitude!,
                currentLocation.latitude!,
              ])
              .addTo(this.map!);
          });
        });
      },
      error: (response) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text:
            response.error.mensaje == undefined
              ? "Servidor no disponible"
              : response.error.mensaje,
        });
      },
    });
  }
}
