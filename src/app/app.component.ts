import { Component } from '@angular/core';
import Keyboard from 'simple-keyboard';
import 'simple-keyboard/build/css/index.css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Practises-Management';                // Título de la aplicación
  
  private keyboard: Keyboard | undefined = undefined;
  private keyboardHTML: HTMLDivElement| undefined = undefined;

  constructor() {

  }

  ngAfterViewInit() {

    this.keyboard = new Keyboard({
      onKeyPress: (button: any) => this.onKeyPress(button),
      preventMouseDownDefault: true
    });

    this.keyboard.setOptions({

      display: {
        '{bksp}': "Borrar",
        '{enter}': "Enter",
        '{shift}': "Mayús",
        '{lock}': "Bloq. Mayús",
        '{tab}': "Tab",
        '{space}': " ",
        '{close}': "➘",
        '{doublecom}': '"',
        '{numeric}':'?123',
        '{default}': "abc",
        '{move}': "..."
      },
      layout: {
        default: [
          "q w e r t y u i o p",
          "a s d f g h j k l ñ",
          "{shift} z x c v b n m {bksp}",
          "{numeric} {space} {move} {close}"
        ],
        shift: [
          "Q W E R T Y U I O P",
          "A S D F G H J K L Ñ",
          "{shift} Z X C V B N M {bksp}",
          "{numeric} {space} {move} {close}"
        ],
        num: [
          "1 2 3 4 5 6 7 8 9 0",
          "@ # ~ _ & - + ( ) /",
          `* " ' : ; ! ? {bksp}`,
          "{default} {space} {move} {close}"
        ]
      }
    }) ;

    this.keyboardHTML = document.querySelector(".simple-keyboard") as HTMLDivElement;
  }


  click() {
    // Si el usuario tiene activado el sonido de click lo reproducimos, si no, no
    
    if (true) {
      const click_sound = new Audio('assets/sound/click.mp3');
      click_sound.play();
    }
  }

  showHideKeyboard(show: boolean): void {
     if (show) {
        this.keyboardHTML?.classList.remove("hidden");
     }
     else {
      this.keyboardHTML?.classList.add("toDOWN");

      setTimeout(() => {
        this.keyboardHTML?.classList.add("hidden");
        this.keyboardHTML?.classList.remove("toDOWN");
      }, 750);
     }
  }

  onKeyPress(keyPress: string):void {
    if (keyPress === "{shift}" || keyPress === "{lock}") this.toggleMayus();
    else if (keyPress == "{numeric}") this.showNumericKeyboard(true);
    else if (keyPress == "{default}") this.showNumericKeyboard(false);
    else if (keyPress == "{close}") this.showHideKeyboard(false);
    else this.press(keyPress);
  }

  press(key: string) {
    let element = document.activeElement as HTMLInputElement;

    if (element && (element.type == "text" || element.type == "password" || element.type == "email") ) {
      switch (key) {
        case "{space}":
          element.value = element.value + " ";
          break;
        case "{bksp}":
          element.value = element.value.substring(0, element.value.length - 1);
          break;
        case "{move}":
          break;
        default:
          element.value = element.value + key;
          break;
      }
    }
  }

  showNumericKeyboard(showNumeric: boolean) {
      let layout = showNumeric ? "num": "default";
      this.keyboard!.setOptions({layoutName: layout});
  }

  toggleMayus() {
    let currentLayout = this.keyboard!.options.layoutName;
    let shiftToggle = currentLayout === "default" ? "shift" : "default";
    
    this.keyboard!.setOptions({
      layoutName: shiftToggle,
    });
  }
}
