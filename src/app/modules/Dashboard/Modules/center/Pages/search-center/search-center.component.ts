import { Component, OnInit } from "@angular/core";
import { CenterService } from "../../Service/center.service";
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

@Component({
  selector: "app-search-center",
  templateUrl: "./search-center.component.html",
  styleUrls: ["./search-center.component.css"],
})
export class SearchCenterComponent implements OnInit {
  constructor(
    private centerSvr: CenterService,
    private dashboardSvr: DashboardService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  mapbox = mapboxgl as typeof mapboxgl;
  map: mapboxgl.Map | null = null;

  centers: School[] = [];
  locations: LocationAndSchool[] = [];


  setMode: boolean = true;

  mapMode: boolean = false;

  ngOnInit(): void {

    this.centerSvr.getCenterOfAdministrator()
    .subscribe(
      {
        next: () => {
          this.setMode = false;
        }
      }
    );


    this.dashboardSvr.setTitle("Centros");

    this.mapbox.accessToken = environment.mapBoxToken;

    this.centerSvr.getAllCenters().subscribe({
      next: (schools: any) => {
        this.centers = schools;
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
    this.centerSvr.getCentersByName(name).subscribe({
      next: (schools: any) => {
        this.centers = schools;
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

    this.centerSvr.getAllLocations().subscribe({
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

          locations.forEach((currentLocation: LocationAndSchool) => {

            let result;

            if (this.setMode) {
              result = "<span>" + currentLocation.name + "</span>" + "<div class='enginepop'>" + "<img id='" + currentLocation.id + "' class='enginemap' src='assets/img/engine.png'>" + "</div>"
            }
            else {
              result = "<span>" + currentLocation.name + "</span>" + "<div class='enginepop'>" + "</div>"
            }

            const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
              result
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

          document
            .querySelector("#mapCenters")
            ?.addEventListener("click", (event) => {
              let element = event.target as HTMLElement;

              if (element.classList.contains("enginemap")) {
                this.configureSchool(parseInt(element.id));
              }
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

  configureSchool(idSchool: number) {
    Swal.fire({
      title: "Indique contraseña",
      input: "password",
      inputAttributes: {
        autocapitalize: "off",
      },
      preConfirm: (login) => {
        let school: School = {};
        school.id = idSchool;
        school.password = login;

        return this.centerSvr.setCurrentAdministrator(school)
        .toPromise()
        .then(() => {
          this.router.navigate(["../my-center"], { relativeTo: this.route });
        })
        .catch((response) => {
          Swal.showValidationMessage(response.error.mensaje);
        });
      },
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonText: "Administrar",
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading(),
    });



  }
}
