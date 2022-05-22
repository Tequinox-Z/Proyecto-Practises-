import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  @Output() query = new EventEmitter<String>();

  send(event: Event) {
    let input = event.target as HTMLInputElement;
    this.query.emit(input.value);
  }

  
}
