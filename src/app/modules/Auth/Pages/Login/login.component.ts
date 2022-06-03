import { Component, OnInit, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../Services/Auth-service/auth.service';
import { UserLoginRequest } from '../../../../core/Interfaces/user-login-request/user-login-request';
import Swal from 'sweetalert2';
import { LoginResponse } from '../../../../core/Interfaces/login-response/login-response';
import { Router, ActivatedRoute } from '@angular/router';
import { KeyboardService } from '../../../../shared/Services/Keyboard-service/keyboard-service';
import { catchError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { PersonDto } from '../../../../core/Interfaces/personDto/person-dto';
import { SoundService } from '../../../../core/Services/SoundFx/sound.service';
import { RestError } from '../../../../core/Interfaces/restError/restError';
import { DisplayLoadingService } from '../../../../core/Services/DisplayLoading/display-loading.service';

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


  constructor(
    private auth: AuthService, 
    private router: Router, 
    private route: ActivatedRoute, 
    public keyboardService: KeyboardService, 
    private toastService: ToastrService,
    private soundService: SoundService,
    public displayLoadingService: DisplayLoadingService
    ) { }

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

  show() {
    this.keyboardService.showKeyboard(true);
  }

  /**
   * Inicia sesión
   */
  submit() {
    this.displayLoadingService.setShowDisplayLoading(true);                              // Mostramos la pantalla de carga

    this.auth.login(this.model).subscribe({                                             // Lanzamos la petición
      next: (response: LoginResponse) => {
        this.displayLoadingService.setShowDisplayLoading(false);                        // Ocultamos la pantalla de carga
        this.auth.setToken(response.jwt_token + '');                                    // Establecemos el token
        this.router.navigate(['/']);                                                    // Navegamos hasta la aplicación
      },
      error: (response) => {
        this.displayLoadingService.setShowDisplayLoading(false);                         // En caso de error ocultamos la pantalla de carga
        
        // Indicamos el error ocurrido

        Swal.fire({                                                                     
          icon: 'error',
          title: 'Oops...',
          text: ((response.error.mensaje == undefined)? 'Servidor no disponible' : response.error.mensaje),
        })

        this.soundService.notify();
      }
    })
    
  }

  back() {
    this.router.navigate(['../welcome'], { relativeTo: this.route });
  }

  restorePassword() {
    let inputDNI = document.querySelector("#dni.ng-valid") as HTMLInputElement;
    
    if (inputDNI != undefined) {
      this.auth.restorePassword(inputDNI.value).subscribe({
        next: (data: PersonDto) => {
          this.toastService.success(data.email, "Enviado enlace a");
          this.soundService.notify();
        },
        error: (error) => {
          if (error.error.mensaje != undefined) {
            this.toastService.warning(error.error.mensaje, "Advertencia");
          }
          else {
            this.toastService.error("Servidor no disponible", "Error");
          }

          this.soundService.notify();
        }
      })
    }
  }
}
