import { Component, OnInit } from '@angular/core';
import * as mapboxgl from "mapbox-gl";
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-view-ubication',
  templateUrl: './view-ubication.component.html',
  styleUrls: ['./view-ubication.component.css']
})
export class ViewUbicationComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  mapbox = mapboxgl as typeof mapboxgl;
  map: mapboxgl.Map | null = null;

  ngOnInit(): void {

    this.map = new mapboxgl.Map({
      container: "mapCenters",
      style: "mapbox://styles/mapbox/light-v10",
      zoom: 15,
      center: [this.route.snapshot.params["longitude"], this.route.snapshot.params["latitude"]],
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
  }

  back() {
    javascript:history.back();
  }

}
