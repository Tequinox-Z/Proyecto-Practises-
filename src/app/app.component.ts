import { Component } from '@angular/core';
import { AuthService } from './modules/Auth/Services/Auth-service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class  AppComponent {
  constructor(private auth: AuthService) {

  }
  title = 'Practises-Management';                // Título de la aplicación
}
