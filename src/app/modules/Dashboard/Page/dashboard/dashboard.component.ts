import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../Auth/Services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  
  loading: boolean = false;
  
  
  ngOnInit(): void {
    
  }

  menuToggle() {
    document.querySelector("#menu")?.classList.toggle("close");
  }
}
