import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  // Componente de búsqueda

  constructor() { }

  ngOnInit(): void {
  }

  
  @Output() query = new EventEmitter<String>();

  // Al buscar lanzamos un evento con la cadena a buscar
  
  send(event: Event) {
    let input = event.target as HTMLInputElement;
    this.query.emit(input.value);
  }

  
}
