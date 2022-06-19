import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { KeyboardService } from '../../Services/Keyboard-service/keyboard-service';

@Component({
  selector: 'app-accesibility',
  templateUrl: './accesibility.component.html',
  styleUrls: ['./accesibility.component.css']
})
export class AccesibilityComponent implements OnInit {


  // Componente de accesibilidad

  constructor(private  keySrv :KeyboardService) { }

  @Output() closeKey = new EventEmitter();                           

  ngOnInit(): void {
    
  }

  showKeyboard() {
    this.keySrv.showKeyboard(true);
  }


  close() {
    this.closeKey.emit();
  }

  greyScale() {
    document.querySelector("html")?.classList.toggle("grayScale");
  }
  
  contrast() {
    document.querySelector("html")?.classList.toggle("hightContrast");
  }
}
