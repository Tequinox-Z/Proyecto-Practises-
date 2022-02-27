import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/Auth-service/auth.service';
import { UserLoginRequest } from '../../../../core/Interfaces/user-login-request/user-login-request';
import Swal from 'sweetalert2';
import { LoginResponse } from '../../../../core/Interfaces/login-response/login-response';
import { Router, ActivatedRoute } from '@angular/router';

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

  loading: boolean = false; 

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    if (this.auth.getToken() != null) {
      this.router.navigateByUrl('/');
    }
  }

  submit() {

    this.loading = true;

    this.auth.login(this.model).subscribe({
      next: (response: LoginResponse) => {
        this.loading = false;
        this.auth.setToken(response.jwt_token + '');
        this.router.navigate(['/']);
      },
      error: (response) => {
        this.loading = false;
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: ((response.error.mensaje == undefined)? 'Servidor no disponible' : response.error.mensaje),
          /*footer: '<a href="">Why do I have this issue?</a>'*/
        })
      }
    })
    
  }
}
