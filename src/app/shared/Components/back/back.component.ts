import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})
export class BackComponent implements OnInit {


  // Botón de volver atrás

  constructor() { }

  ngOnInit(): void {
  }

  
  @Output() back = new EventEmitter();

  // Al pulsar lanzamos el evento back

  click() {
    this.back.emit();
  }

}
