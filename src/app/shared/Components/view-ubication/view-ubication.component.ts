import { Component, OnInit } from '@angular/core';
import * as mapboxgl from "mapbox-gl";
import { ActivatedRoute, Params } from '@angular/router';
import { RouteNavigationServiceService } from '../../Services/RouteNavigationService/route-navigation-service.service';
import { RouteNavigation } from '../../../core/Interfaces/RouteNavigation/RouteNavigation';
import * as geojson from 'geojson';


@Component({
  selector: 'app-view-ubication',
  templateUrl: './view-ubication.component.html',
  styleUrls: ['./view-ubication.component.css']
})
export class ViewUbicationComponent implements OnInit {


  // Componente de vista de ubicación


  constructor(
    private route: ActivatedRoute,
    private routeNavigation: RouteNavigationServiceService) { }

  mapbox = mapboxgl as typeof mapboxgl;                            // Constructor de mapa
  map: mapboxgl.Map | null = null;                                 // Mapa


  ngOnInit(): void {

    //  Obtenemos la posición actual

    navigator.geolocation.getCurrentPosition((ubication) => {

      // Creamos el mapa

      this.map = new mapboxgl.Map({
        container: "mapCenters",
        style: "mapbox://styles/mapbox/light-v10",
        zoom: 15,
        center: [ubication.coords.longitude, ubication.coords.latitude],
      });
  
      // Creamos el marcador
  
      new mapboxgl.Marker({
        draggable: false,
        color: "#ff8000",
      })
        .setLngLat([
          this.route.snapshot.params["longitude"],
          this.route.snapshot.params["latitude"],
        ])
        .addTo(this.map!);
  
        // Añadimos los controles

      this.map.addControl(new mapboxgl.NavigationControl());
      this.map.addControl(new mapboxgl.FullscreenControl());
  
      // Cargamos la ruta

      this.map.on("load", () => {
        this.loadRoute();
      })
  
  
      // Acualizamos la ruta cada 500 milisegundos

      setTimeout(() => {
        this.loadRoute()
      }, 500);
    });
  }

  // Vuelve atrás

  back() {
    javascript:history.back();
  }


  // Carga la ruta más óptima desde la api

  loadRoute() {

    // Obtenemos la posición actual

    navigator.geolocation.getCurrentPosition((ubication) => {

      // Obtenemos las coordenadas

      let longitudeToGo: number = this.route.snapshot.params["longitude"];
      let latitudeToGo: number = this.route.snapshot.params["latitude"];

      // Obtenemos la ruta

      this.routeNavigation.getRoute(ubication.coords.longitude, ubication.coords.latitude, longitudeToGo, latitudeToGo).subscribe((response: any) => {
        const data = response;
        const routes = data.routes[0].geometry.coordinates;
      
        // Creamos un objeto geojson

        const geojson: any = {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: routes
          }
        };

        // Si ta existe lo editamos

        if (this.map!.getSource('route')) {
          const source : mapboxgl.GeoJSONSource = this.map!.getSource('route') as mapboxgl.GeoJSONSource;

          source.setData(geojson);
        }
        else {

          // Si no existe creamos la ruta

          this.map!.addLayer({
            id: 'route',
            type: 'line',
            source: {
              type: 'geojson',
              data: geojson
            },
            layout: {
              'line-join': 'round',
              'line-cap': 'round'
            },
            paint: {
              'line-color': '#ff8000',
              'line-width': 5,
              'line-opacity': 0.75
            }
          });
        }

        // Añadimos la posición de destino 

        this.map!.addLayer({
          id: 'point',
          type: 'circle',
          source: {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: [
                {
                  type: 'Feature',
                  properties: {},
                  geometry: {
                    type: 'Point',
                    coordinates: [ubication.coords.longitude, ubication.coords.latitude]
                  }
                }
              ]
            }
          },
          paint: {
            'circle-radius': 10,
            'circle-color': '#ff8000'
          }
        });
      })


    });
  }

}
