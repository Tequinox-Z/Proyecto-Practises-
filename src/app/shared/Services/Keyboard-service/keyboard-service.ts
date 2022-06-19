import { Injectable } from '@angular/core';


// Servicio de teclado


@Injectable({
  providedIn: 'root'
})
export class KeyboardService {
  private keyboardShow!: boolean;        // Muestra el teclado

  constructor() { 
    this.keyboardShow = false;
  }

  // COmprueba si está mostrandose el teclado

  isShowKeyboard() {
    return this.keyboardShow;
  }

  // Muestra u oculta el teclado

  showKeyboard(show: boolean): void {
    this.keyboardShow = show;
  }
}
