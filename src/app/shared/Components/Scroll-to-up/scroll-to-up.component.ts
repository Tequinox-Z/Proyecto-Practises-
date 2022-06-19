import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-to-up',
  templateUrl: './scroll-to-up.component.html',
  styleUrls: ['./scroll-to-up.component.css']
})
export class ScrollToUpComponent implements OnInit {

  // Componente de scroll hasta arriba

  windowScrolled: boolean = false;                                            // Indica si la ventana esta siendo scrolleada

  constructor(@Inject(DOCUMENT) private document: Document) {}


  // Esta función se lanza al hacer scroll de la página

  @HostListener("window:scroll", [])    
  onWindowScroll() {
      if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
          this.windowScrolled = true;                                                                    // Si la página está abajo indicamos que ha sido bajada
      } 
     else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
          this.windowScrolled = false;                                                                   // Si la página no está bajada indicamos que no ha sido bajada
      }
  }

  // Esta función sube la vista hasta el pricipio de la página

  scrollToTop() {
      (function smoothscroll() {
          let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;            // Obtenemos la posición actual de la vista sobre la página

          if (currentScroll > 0) {
              window.requestAnimationFrame(smoothscroll);                                               // Si está desplazada indicamos la animación de scroll
              window.scrollTo(0, currentScroll - (currentScroll / 8));                                  // Movemos la página hasta arriba reduciendo la velocidad conforme nos acercamos
          }
      })();
  }

  ngOnInit() {}

}
