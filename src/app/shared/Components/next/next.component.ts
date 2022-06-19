import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css']
})
export class NextComponent implements OnInit {


  // Botón siguiente

  constructor() { }

  ngOnInit(): void {
  }

  @Output() next = new EventEmitter();

  // Al hacer click lanzamos el evento
  
  click() {
    this.next.emit();
  }

}
