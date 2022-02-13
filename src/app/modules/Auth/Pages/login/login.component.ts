import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { UserLoginRequest } from '../../../../core/interfaces/user-login-request/user-login-request';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { LoginResponse } from '../../../../core/interfaces/login-response/login-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: UserLoginRequest = {
    "dni" : "",
    "password" : ""
  }

  constructor(private auth: AuthService, private router: Router) { 
    
  }

  ngOnInit(): void {
    
  }

  submit() {
    this.auth.login(this.model).subscribe({
      next: (response: LoginResponse) => {
        this.auth.setToken(response.jwt_token + '');
        this.router.navigate(['/']);
      },
      error: (response) => {
        console.log(response);
          Swal.fire('Error ', ((response.message == undefined)? 'Servidor no disponible' : response.message));
      }
    })
  }
}
