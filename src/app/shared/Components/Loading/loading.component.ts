import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const typed = new Typed('.typed', {
      strings: [
                '..'
      ],
      typeSpeed: 300,
      shuffle: false,
      backSpeed: 300,
      loop: true,
      cursorChar: '<span id="color">.</span>',
      fadeOutClass: 'typed-fade-out',
      backDelay: 1000
  });

  const typedSubtitle = new Typed('.subtitle', {
    strings: [
              'Puedes buscar un alumno por cualquiera de sus datos conocidos en la barra de búsqueda',
              'El administrador del centro tiene la posiblidad de controlar los dispositivos IOT del centro'
    ],
    typeSpeed: 10,
    shuffle: true,
    backSpeed: 10,
    loop: true,
    cursorChar: '<span id="color">_</span>',
    fadeOutClass: 'typed-fade-out',
    backDelay: 2000
});
  }

}
