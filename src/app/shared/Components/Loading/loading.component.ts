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

    /**
     * Esta función permite mostrar una animación de la carga ...
     */
    const typed = new Typed('.typed', {
      strings: [
                '..'                                                // Texto
      ],
      typeSpeed: 300,                                               // Velocidad de tipado
      shuffle: false,                                               // Aleatoriamente
      backSpeed: 300,                                               // Velocidad de borrado
      loop: true,                                                   // Repetir
      cursorChar: '<span id="color">.</span>',                      // Cursor
      fadeOutClass: 'typed-fade-out',                               // Clase al tipear
      backDelay: 1000                                               // Delay                   
  });

  /**
   * Esta función muestra los distintos textos de la pantalla de carga en el subtítulo
   */
  const typedSubtitle = new Typed('.subtitle', {
    strings: [
              'Puedes buscar un alumno por cualquiera de sus datos conocidos en la barra de búsqueda',
              'El administrador del centro tiene la posiblidad de controlar los dispositivos IOT del centro',                  // Lista de textos
              'Accede a tu escuela sólo conociendo la contraseña de acceso'
    ],
    typeSpeed: 10,                                                  // Velocidad
    shuffle: true,                                                  // Aleatorio
    backSpeed: 10,                                                  // Velocidad de borrado
    loop: true,                                                     // Repetir
    cursorChar: '<span id="color">_</span>',                        // Cursor
    fadeOutClass: 'typed-fade-out',                                 // Clase al tipear
    backDelay: 2000                                                 // Delay
});
  }

}
