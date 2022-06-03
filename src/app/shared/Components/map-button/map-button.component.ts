import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-map-button',
  templateUrl: './map-button.component.html',
  styleUrls: ['./map-button.component.css']
})
export class MapButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Output() mapMode = new EventEmitter<String>();

  click() {
    this.mapMode.emit();
  }

}
