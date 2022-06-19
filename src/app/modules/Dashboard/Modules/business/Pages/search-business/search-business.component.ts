import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
import { environment } from "../../../../../../../environments/environment";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import * as mapboxgl from "mapbox-gl";
import * as MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import { DashboardService } from "../../../../Services/Dashboard-service/dashboard.service";
import { Router, ActivatedRoute } from '@angular/router';
import { BusinessService } from '../../Service/business.service';
import { LocationAndBusiness } from '../../../../../../core/Interfaces/LocationAndBusiness/LocationAndBusiness';
import { UserService } from '../../../../Services/UserService/user.service';
import { LaborTutor } from '../../../../../../core/Interfaces/LaborTutor/LaborTutor';


// Página de buscar empresas

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
    private route: ActivatedRoute,
    private userSrv: UserService
  ) {}

  tutors :LaborTutor[] = [];

  isAdmin: boolean = false;                                    // Indica si es administrador
  mapbox = mapboxgl as typeof mapboxgl;                        // Construye el mapa
  map: mapboxgl.Map | null = null;                             // Mapa


  locationsAndBusiness: LocationAndBusiness[] = [];                       // Lista de localizaciones

  mapMode: boolean = false;                                    // Modo mapa

  ngOnInit(): void {

    // Comprobamos si es admin

    if (this.userSrv.getPerson()!.rol!.toString() == "ROLE_ADMIN") {
      this.isAdmin = true;
    }

    // Establecemos el título

    this.dashboardSvr.setTitle("Empresas");

    // Establecemos el token

    this.mapbox.accessToken = environment.mapBoxToken;

    // Obtenemos las ubicaciones

    let request = this.businessSvr.getAllLocations().subscribe({
      next: (business: any) => {
        request.unsubscribe();
        
        this.locationsAndBusiness = business;            // Establecemos las ubicaciones
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
  
  /**
   * Permite buscar empresas por nombre
   * @param name Nombre
   */
  buscar(name: String) {

    // Lanzamos la petición

    let request = this.businessSvr.getBusinessByName(name).subscribe({
      next: (business: any) => {

        request.unsubscribe();

        this.locationsAndBusiness = business;          // Establecemos los datos
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



  // Obtiene los teléfonos de los tutores

  getTelefoneTutors(cif: string) {
    let request = this.businessSvr.getTutorsFromBusiness(cif).subscribe({
      next: (tutors: LaborTutor[]) => {

        request.unsubscribe();

        // Establecemos los tutores en la variable tutores

        this.tutors = tutors;

        // Iniciamos una variable con los teléfonos

        let telefones = "";

        // Si no hay lo indicamos

      if (tutors.length == 0) {
        telefones = "Sin teléfonos";
      }
      else {

        // Si hay los vamos añadiendo

        this.tutors.forEach((tutor: LaborTutor) => {
          telefones += "<p>" + tutor.telefone! + "</p>" 
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
   * Muestra el modo lista de escuelas
   */
  showListOfSchool() {
    this.mapMode = false;
  }

  /**
   * Muestra el mapa
   */
  showMap() {

    // Habilitamos el modo mapa

    this.mapMode = true;

    // Obtenemos las localizaciones

    let request = this.businessSvr.getAllLocations().subscribe({
      next: (locations: any) => {
        request.unsubscribe();

        this.locationsAndBusiness = locations;      // Establecemos los datos

        // Obtenemos la posición actual y cremaos el mapa

        navigator.geolocation.getCurrentPosition((data) => {
          this.map = new mapboxgl.Map({
            container: "mapCenters",
            style: "mapbox://styles/mapbox/light-v10",
            zoom: 15,
            center: [data.coords.longitude, data.coords.latitude],
          });

          // Añadimos controles

          this.map.addControl(new mapboxgl.NavigationControl());
          this.map.addControl(new mapboxgl.FullscreenControl());
          this.map.addControl(
            new MapboxGeocoder({
              accessToken: environment.mapBoxToken,
            })
          );

          // Cambiamos el placeholder de la búsqueda

          let searchBox = document.querySelector(
            ".mapboxgl-ctrl-geocoder--input"
          ) as HTMLInputElement;
          searchBox.placeholder = "Buscar";

          // Creamos los marcadores

          locations.forEach((currentLocation: LocationAndBusiness) => {
            
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

        request.unsubscribe();

        // Indicamos el error
        
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
