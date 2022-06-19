import { Injectable } from '@angular/core';


// Clase de control de sonido

@Injectable({
  providedIn: 'root'
})
export class SoundService {
  
  private enabled: boolean = true;        // Indica si está habilitado los sonidos en la interfaz

  constructor() {}


  /**
   * Sonido de notificación
   */
  notify():void {
    if (this.enabled) new Audio("assets/sound/notify.mp3").play();
  }

  /**
   * Sonido de click
   */
  click():void {
    if (this.enabled) new Audio("assets/sound/click.mp3").play();
  }

  /**
   * Click de teclado
   */
  keyboardClick():void {
    if (this.enabled) new Audio("assets/sound/keyboard-key.mp3").play();
  }

  /**
   * Habilita o deshabilita el sonido
   */
  enableSound(enable: boolean):void {
    this.enabled = enable;
  }

  /**
   * Indica si está o no habilitado el sonido
   */
  isEnable():boolean {
    return this.enabled;
  }
}
