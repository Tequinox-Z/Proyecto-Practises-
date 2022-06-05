import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})
export class BackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() back = new EventEmitter();

  click() {
    this.back.emit();
  }

}
