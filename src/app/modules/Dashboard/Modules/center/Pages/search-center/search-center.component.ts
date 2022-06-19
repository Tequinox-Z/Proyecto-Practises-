import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CenterService } from "../../Service/center.service";
import { School } from "../../../../../../core/Interfaces/school/school";
import Swal from "sweetalert2";
import { environment } from "../../../../../../../environments/environment";
import { Location } from '../../../../../../core/Interfaces/Location/Location';
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import * as mapboxgl from "mapbox-gl";
import * as MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import { LocationAndSchool } from "../../../../../../core/Interfaces/LocationAndSchool/LocationAndSchool";
import { DashboardService } from "../../../../Services/Dashboard-service/dashboard.service";
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../Services/UserService/user.service';
import { Administrator } from '../../../../../../core/Interfaces/administrator/administrator';
import { ProfessionalDegree } from '../../../../../../core/Interfaces/ProfessionalDegree/ProfessionalDegree';


// Página de búsqueda de centro

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
    private userService: UserService,
    private route: ActivatedRoute
  ) {}


  mapbox = mapboxgl as typeof mapboxgl;              // Constructor de mapa
  map: mapboxgl.Map | null = null;                   // Mapa

  centers: School[] = [];                            // Lista de centros
  locations: LocationAndSchool[] = [];               // Lista de localizaciones

  administrators : Administrator[] = [];             // Lista de administradores
  degrees : ProfessionalDegree[] = [];               // Lista de ciclos

  setMode: boolean = true;                           // Modo de selección

  mapMode: boolean = false;                          // Modo mapa

  ngOnInit(): void {

    // Comprobamos si es un administrador

    if (this.userService.getPerson()?.rol + "" == "ROLE_ADMIN") {

      // Obtenemos el centro del administrador para saber si poner el modo set

      let request = this.centerSvr.getCenterOfAdministrator()
      .subscribe(
        {
          next: () => {
            request.unsubscribe();
            this.setMode = false;            // Deshabilitamos el modo set
          },
          error: () => {
            request.unsubscribe();
            this.setMode = true;             // Habilitamos el modo set
          }
        }
      );
    }
    else {
      this.setMode = false;                  // Deshabilitamos el modo set
    }


    // Establecemos el título

    this.dashboardSvr.setTitle("Centros");

    // Establecemos el token
    this.mapbox.accessToken = environment.mapBoxToken;

    // Obtenemos los centros

    let request = this.centerSvr.getAllCenters().subscribe({
      next: (schools: any) => {
        request.unsubscribe();
        
        // Establcemos los centros
        
        this.centers = schools;
      },
      error: (response) => {

        request.unsubscribe();
        
        // Mostramos error
        
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

  // Obtiene los teléfonos de los administradores 

  getTelefoneAdmins(idSchool: number) {
    let request = this.centerSvr.getAdministrators(idSchool).subscribe({
      next: (administrators: any) => {

        request.unsubscribe();

        // Establecemos los administradores en la variable administradores

        this.administrators = administrators;

        // Iniciamos una variable con los teléfonos

        let telefones = "";

        // Si no hay lo indicamos

      if (administrators.length == 0) {
        telefones = "Sin teléfonos";
      }
      else {

        // Si hay los vamos añadiendo

        this.administrators.forEach((administrator: Administrator) => {
          telefones += "<p>" + administrator.telefone! + "</p>" 
        });
      }

      // Mostramos

        Swal.fire({
          title: 'Teléfonos',
          icon: 'info',
          html: telefones,
          showCloseButton: true,
          focusConfirm: false
        })
      }
    })
  }

  /**
   * Obtiene los ciclos de un centro
   */
  getDegrees(idSchool: number) {
    let request = this.centerSvr.getDegreesFromSchoolId(idSchool).subscribe({
      next: (degrees: any) => {

        request.unsubscribe();

        this.degrees = degrees;            // Establecemos los ciclos

        let names = "";                    // Lista de nombres de ciclos

      if (degrees.length == 0) {
        names = "Sin ciclos";              // Si no hay lo indicamos
      }
      else {

        // Si hay los vamos añadiendo

        this.degrees.forEach((degree: ProfessionalDegree) => {
          names += "<p>" + degree.name! + "</p>" 
        });
      }

      // Mostramos los ciclos

        Swal.fire({
          title: 'Ciclos',
          icon: 'info',
          html: names,
          showCloseButton: true,
          focusConfirm: false
        })
      }
    })
  }

  // Busca centros por nombre

  buscar(name: String) {
    let request = this.centerSvr.getCentersByName(name).subscribe({
      next: (schools: any) => {
        request.unsubscribe();

        // Establecemos los centros

        this.centers = schools;
      },
      error: (response) => {

        request.unsubscribe();

        // Mostramos el error

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

  // Activa el modo listado

  showListOfSchool() {
    this.mapMode = false;
  }

  // Muestra el mapa
  showMap() {

    // habilitamos el modo mapa

    this.mapMode = true;

    let request = this.centerSvr.getAllLocations().subscribe({
      next: (locations: any) => {

        request.unsubscribe();

        // Establecemos las localizaciones

        this.locations = locations;

        // Obtenemos la localización y creamos el mapa 

        navigator.geolocation.getCurrentPosition((data) => {
          this.map = new mapboxgl.Map({
            container: "mapCenters",
            style: "mapbox://styles/mapbox/light-v10",
            zoom: 15,
            center: [data.coords.longitude, data.coords.latitude],
          });

          // Añadimos los controles

          this.map.addControl(new mapboxgl.NavigationControl());
          this.map.addControl(new mapboxgl.FullscreenControl());
          this.map.addControl(
            new MapboxGeocoder({
              accessToken: environment.mapBoxToken,
            })
          );


          // Cambiamos el placeholder de búsqueda

          let searchBox = document.querySelector(
            ".mapboxgl-ctrl-geocoder--input"
          ) as HTMLInputElement;
          searchBox.placeholder = "Buscar";

          // Creamos un marcador por cada localización

          locations.forEach((currentLocation: LocationAndSchool) => {

            // Creamos el pop-pup

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

            // Creamos el marcador

            new mapboxgl.Marker({
              draggable: false,
              color: "#ff8000"
            })
              .setPopup(popup)
              .setLngLat([
                currentLocation.longitude!,
                currentLocation.latitude!,
              ])
              .addTo(this.map!);
          });

          // Añadimos el evento

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
        request.unsubscribe();

        // Mostramos el mensaje en caso de error

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

  // Configura un centro

  configureSchool(idSchool: number) {

    // Pedimos la contraseña

    Swal.fire({
      title: "Indique contraseña",
      input: "password",
      inputAttributes: {
        autocapitalize: "off",
      },
      preConfirm: (login) => {

        // Obtenemos la escuela y establecemos el centro

        let school: School = {};
        school.id = idSchool;
        school.password = login;

        // Retornamos el resultado

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

  // Muestra una ubicación

  viewUbication(idSchool: number) {

    // Obtenemos la escuela

    let school: School = {};
    school.id = idSchool;

    let request = this.centerSvr.getUbication(school).subscribe({
      next: (location: Location) => {
        request.unsubscribe();
        
        // Dirigimos al usuario a la ubicación

        this.router.navigate(["../ubication/", location.latitude, location.longitude], {relativeTo: this.route});
      },
      error: (response) => {
        request.unsubscribe();

        // Mostramos el error
        
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text:
            response.error.mensaje == undefined
              ? "Servidor no disponible"
              : response.error.mensaje,
        });
      }
    })
  }
}
