import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundService {
  
  private enabled: boolean = true;

  constructor() {}

  notify():void {
    if (this.enabled) new Audio("assets/sound/notify.mp3").play();
  }

  click():void {
    if (this.enabled) new Audio("assets/sound/click.mp3").play();
  }

  keyboardClick():void {
    if (this.enabled) new Audio("assets/sound/keyboard-key.mp3").play();
  }

  enableSound(enable: boolean):void {
    this.enabled = enable;
  }

  isEnable():boolean {
    return this.enabled;
  }
}
