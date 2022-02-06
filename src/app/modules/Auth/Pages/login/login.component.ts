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
    "email" : "",
    "password" : ""
  }

  constructor(private auth: AuthService, private router: Router) { 
    
  }

  ngOnInit(): void {
    
  }

  submit() {
    this.auth.login(this.model).subscribe({
      next: (response: LoginResponse) => {
        this.auth.setToken(response.access_token + '');
          this.router.navigate(['/']);
      },
      error: (response: HttpErrorResponse) => {
          Swal.fire('Error ', ((response.error.message == undefined)? 'Del servidor' : response.error.message));
      }
    })
  }
}
