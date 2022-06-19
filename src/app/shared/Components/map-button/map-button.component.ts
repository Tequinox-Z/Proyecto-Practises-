import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-map-button',
  templateUrl: './map-button.component.html',
  styleUrls: ['./map-button.component.css']
})
export class MapButtonComponent implements OnInit {


  // Botón de modo mapa

  constructor() { }

  ngOnInit(): void {
  }
  
  @Output() mapMode = new EventEmitter<String>();

  // Al hacer click emitimos el evento 
  
  click() {
    this.mapMode.emit();
  }

}
