import { Injectable } from '@angular/core';


// Servicio de pantalla de carga
// Muestra la pantalla de carga

@Injectable({
  providedIn: 'root'
})
export class DisplayLoadingService {
  
  private showDisplayLoading: boolean = false;      // Define si debe de mostrar la pantalla de carga
  private showLoading: boolean = false;             // Define si mostrar la animación de carga

  constructor() { }


  /**
   * Indica si se está mostrando la pantalla de carga
   */
  getshowDisplayLoading() {
    return this.showDisplayLoading;
  }

  /**
   * Establece si mostrar o no la pantalla de carga
   */
  setShowDisplayLoading(status: boolean) {
    this.showDisplayLoading = status;
  }

  /**
   * Indica si se debe de mostrar la animación de carga
   */
  getShowLoading() {
    return this.showLoading;
  }

  /**
   * Establece si mostrar pantalla de carga
   */
  setShowLoading(status: boolean) {
    this.showLoading = status;
  }

}
