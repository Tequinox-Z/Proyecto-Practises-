import { Component, OnInit, AfterViewInit } from '@angular/core';
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
export class LoginComponent implements AfterViewInit, OnInit {

  model: UserLoginRequest = {                                                          // Este objeto almacenará el dni y contraseñá proporcionados por el usuario
    "dni" : "",
    "password" : ""
  }

  loading: boolean = false;                                                            // Indica si la pantalla de carga debe mostrarse u ocultarse

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) { 
    
  }


  ngOnInit(): void {
    if (this.auth.getToken() != null) {
      this.router.navigateByUrl('/');                                                  // Si tiene token lo redirigimos a la aplicación
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
        let transition = document.querySelector("#transition-login") as HTMLDivElement;
        transition.style.display = "none";
    }, 1000);
  }

  /**
   * Inicia sesión
   */
  submit() {

    this.loading = true;                                                                // Mostramos la pantalla de carga

    this.auth.login(this.model).subscribe({                                             // Lanzamos la petición
      next: (response: LoginResponse) => {
        this.loading = false;                                                           // Ocultamos la pantalla de carga
        this.auth.setToken(response.jwt_token + '');                                    // Establecemos el token
        this.router.navigate(['/']);                                                    // Navegamos hasta la aplicación
      },
      error: (response) => {
        this.loading = false;                                                           // En caso de error ocultamos la pantalla de carga
        
        // Indicamos el error ocurrido

        Swal.fire({                                                                     
          icon: 'error',
          title: 'Oops...',
          text: ((response.error.mensaje == undefined)? 'Servidor no disponible' : response.error.mensaje),
          /*footer: '<a href="">Why do I have this issue?</a>'*/
        })
      }
    })
    
  }

  back() {
    this.router.navigate(['../welcome'], { relativeTo: this.route });
  }

  restorePassword() {
    let inputDNI = document.querySelector("#dni.ng-valid");
    
    if (inputDNI != undefined) {
        
    }
  }
}
