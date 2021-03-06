import { Component } from "@angular/core";
import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";
import * as $ from "jquery";
import "jqueryui";
import "jquery-ui-dist/jquery-ui";
import { KeyboardService } from "./shared/Services/Keyboard-service/keyboard-service";
import { SoundService } from './core/Services/SoundFx/sound.service';
import { DisplayLoadingService } from './core/Services/DisplayLoading/display-loading.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Practises-Management";                                                                     // Título de la aplicación

  private keyboard: Keyboard | undefined = undefined;
  private keyboardDIVHTML: HTMLDivElement | undefined = undefined;

  constructor (
    public keyboardService: KeyboardService,
    private soundService: SoundService,
    public displayLoadingService: DisplayLoadingService
  ) {}

  ngAfterViewInit() {
    this.configureKeyboard();          // Configura el teclado
  }

  configureKeyboard() {

    // Añadimos el evento click

    this.keyboard = new Keyboard({
      onKeyPress: (button: any) => this.onKeyPress(button),
      preventMouseDownDefault: true,
    });

    // Añadimos los distintos mapas

    this.keyboard.setOptions({
      display: {
        "{bksp}": "←",
        "{enter}": "Enter",
        "{shift}": "↑",
        "{shift2}": "↓",
        "{tab}": "Tab",
        "{space}": " ",
        "{close}": "➘",
        "{doublecom}": '"',
        "{numeric}": "?123",
        "{default}": "abc"
      },
      layout: {
        default: [
          "q w e r t y u i o p",
          "a s d f g h j k l ñ",
          "{shift} z x c v b n m {bksp}",
          "{numeric} {space} {close}",
        ],
        shift: [
          "Q W E R T Y U I O P",
          "A S D F G H J K L Ñ",
          "{shift2} Z X C V B N M {bksp}",
          "{numeric} {space} {close}",
        ],
        num: [
          "1 2 3 4 5 6 7 8 9 0",
          "@ # ~ _ & - + ( ) /",
          `* " ' : ; ! ? {bksp}`,
          "{default} {space} {close}",
        ],
      },
    });

    // Hacemos que con jquery sea arrastrable

    this.keyboardDIVHTML = document.querySelector("#keyboard-div") as HTMLDivElement;
    $("#keyboard-div").draggable();

  }

  // Oculta el teclado con animación

  hideKeyboard(): void {
    this.keyboardDIVHTML?.classList.add("toDOWN");

    setTimeout(() => {
      this.keyboardDIVHTML?.classList.remove("toDOWN");
      this.keyboardService.showKeyboard(false);
    }, 600);
  }

  // Cambia el mapa si se pulsa ciertas teclas

  onKeyPress(keyPress: string): void {
    if (keyPress === "{shift}" || 
        keyPress === "{shift2}") this.toggleMayus();
    else if (keyPress == "{numeric}") this.showNumericKeyboard(true);
    else if (keyPress == "{default}") this.showNumericKeyboard(false);
    else if (keyPress == "{close}") this.hideKeyboard();
    else this.press(keyPress);
  }

  // Realiza una función dependiendo de dónde se esté escribiendo

  press(key: string) {
    let element = document.activeElement as HTMLInputElement;

    if (element && (element.type == "text"     ||
                    element.type == "password" ||
                    element.type == "email"
        )
    ){
      switch (key) {
        case "{space}":
          element.value = element.value + " ";
          break;
        case "{bksp}":
          element.value = element.value.substring(0, element.value.length - 1);
          break;
        default:
          element.value = element.value + key;
          break;
      }
    }
  }

  // Muestra el teclado numérico

  showNumericKeyboard(showNumeric: boolean) {
    let layout = showNumeric ? "num" : "default";
    this.keyboard!.setOptions({ layoutName: layout });
  }

  // Muestra las mayúsculas

  toggleMayus() {
    let currentLayout = this.keyboard!.options.layoutName;
    let shiftToggle = currentLayout === "default" ? "shift" : "default";

    this.keyboard!.setOptions({
      layoutName: shiftToggle,
    });
  }

  // Hace un sonido al hacer click e insert la tecla en el input
  click(event: Event) {
    if (true) {
      
      let target = event.target as HTMLElement;

      if (!target.classList.contains("hg-button")) {
        this.soundService.click();
      }
      else {
        this.soundService.keyboardClick();
      }
    }
  }
}
