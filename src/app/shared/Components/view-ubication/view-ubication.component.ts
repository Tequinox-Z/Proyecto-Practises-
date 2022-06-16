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

  constructor(
    private route: ActivatedRoute,
    private routeNavigation: RouteNavigationServiceService) { }

  mapbox = mapboxgl as typeof mapboxgl;
  map: mapboxgl.Map | null = null;

  ngOnInit(): void {

    navigator.geolocation.getCurrentPosition((ubication) => {
      this.map = new mapboxgl.Map({
        container: "mapCenters",
        style: "mapbox://styles/mapbox/light-v10",
        zoom: 15,
        center: [ubication.coords.longitude, ubication.coords.latitude],
      });
  
  
      new mapboxgl.Marker({
        draggable: false,
        color: "#ff8000",
      })
        .setLngLat([
          this.route.snapshot.params["longitude"],
          this.route.snapshot.params["latitude"],
        ])
        .addTo(this.map!);
  
      this.map.addControl(new mapboxgl.NavigationControl());
      this.map.addControl(new mapboxgl.FullscreenControl());
  
      this.map.on("load", () => {
        this.loadRoute();
      })
  
  
      setTimeout(() => {
        this.loadRoute()
      }, 500);
    });
  }

  back() {
    javascript:history.back();
  }


  loadRoute() {
    navigator.geolocation.getCurrentPosition((ubication) => {

      let longitudeToGo: number = this.route.snapshot.params["longitude"];
      let latitudeToGo: number = this.route.snapshot.params["latitude"];

      this.routeNavigation.getRoute(ubication.coords.longitude, ubication.coords.latitude, longitudeToGo, latitudeToGo).subscribe((response: any) => {
        const data = response;
        const routes = data.routes[0].geometry.coordinates;
        
        const geojson: any = {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: routes
          }
        };

        if (this.map!.getSource('route')) {
          const source : mapboxgl.GeoJSONSource = this.map!.getSource('route') as mapboxgl.GeoJSONSource;

          source.setData(geojson);
        }
        else {
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
