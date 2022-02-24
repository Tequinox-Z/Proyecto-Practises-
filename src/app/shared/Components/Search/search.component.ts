import { Component, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }



  ngOnInit(): void {
  }

  /*
  @Output() schoolSelected = new EventEmitter<School>();

  selected(event: Event) {
    //this.schoolSelected.emit({'id': 'event.target'});
  }

  */
}
