import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private title: string = "";
  private disableNav: boolean = false; 

  constructor() { }

  getDisableNav() {
    return this.disableNav;
  }

  setDisableNav(disable: boolean) {
    this.disableNav = disable;
  }

  getTitle() {
    return this.title;
  }

  setTitle(newTitle: string) {
    this.title = newTitle;
  }
}
