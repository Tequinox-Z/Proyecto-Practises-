import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeyboardService {
  private keyboardShow!: boolean;

  constructor() { 
    this.keyboardShow = false;
  }

  isShowKeyboard() {
    return this.keyboardShow;
  }

  showKeyboard(show: boolean): void {
    this.keyboardShow = show;
  }
}
