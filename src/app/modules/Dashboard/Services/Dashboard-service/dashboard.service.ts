import { Injectable } from '@angular/core';


// Servicio de dashboard


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private title: string = "";                                  // Título
  private disableNav: boolean = false;                         // Deshabilitar nav

  constructor() { }

  // Indica si el nav está activo
  getDisableNav() {
    return this.disableNav;
  }

  // Establece el estado del nav
  setDisableNav(disable: boolean) {
    this.disableNav = disable;
  }

  // Obtiene el titulo actual
  getTitle() {
    return this.title;
  }

  // Establece el título
  setTitle(newTitle: string) {
    this.title = newTitle;
  }
}
