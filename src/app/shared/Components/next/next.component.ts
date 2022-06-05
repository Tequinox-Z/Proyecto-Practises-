import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css']
})
export class NextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() next = new EventEmitter();

  click() {
    this.next.emit();
  }

}
