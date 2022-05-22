import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayLoadingService {
  
  private showDisplayLoading: boolean = false;
  private showLoading: boolean = false;

  constructor() { 

  }

  getshowDisplayLoading() {
    return this.showDisplayLoading;
  }

  setShowDisplayLoading(status: boolean) {
    this.showDisplayLoading = status;
  }

  getShowLoading() {
    return this.showLoading;
  }

  setShowLoading(status: boolean) {
    this.showLoading = status;
  }

}
