import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accesibility',
  templateUrl: './accesibility.component.html',
  styleUrls: ['./accesibility.component.css']
})
export class AccesibilityComponent implements OnInit {


  // Componente de accesibilidad

  constructor() { }

  ngOnInit(): void {
    document.querySelector("html");
  }

}
