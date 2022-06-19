import { Component, OnInit, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../Services/Auth-service/auth.service';
import { UserLoginRequest } from '../../../../core/Interfaces/user-login-request/user-login-request';
import Swal from 'sweetalert2';
import { LoginResponse } from '../../../../core/Interfaces/login-response/login-response';
import { Router, ActivatedRoute } from '@angular/router';
import { KeyboardService } from '../../../../shared/Services/Keyboard-service/keyboard-service';
import { ToastrService } from 'ngx-toastr';
import { PersonDto } from '../../../../core/Interfaces/personDto/person-dto';
import { SoundService } from '../../../../core/Services/SoundFx/sound.service';
import { DisplayLoadingService } from '../../../../core/Services/DisplayLoading/display-loading.service';


// Pantalla de login 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit, OnInit {

  model: UserLoginRequest = {                                                          // Este objeto almacenará el dni y contraseña proporcionados por el usuario
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
      this.router.navigateByUrl('/dashboard');                                                  // Si tiene token lo redirigimos a la aplicación
    }
  }


  changePass() {
    let element = document.querySelector("#contraseña");

    if (element?.getAttribute("type") == "password") {
      element!.setAttribute("type", "text");
    }
    else {
      element!.setAttribute("type", "password");
    }
  }

  ngAfterViewInit(): void {

    // Realizamos una pequeña transición de entrada

    setTimeout(() => {
        let transition = document.querySelector("#transition-login") as HTMLDivElement;
        transition.style.display = "none";
    }, 1000);


  }

  /**
   * Muestra el teclado en pantalla
   */
  show() {
    this.keyboardService.showKeyboard(true);
  }

  /**
   * Inicia sesión
   */
  submit() {
    this.displayLoadingService.setShowDisplayLoading(true);                             // Mostramos la pantalla de carga

    let request = this.auth.login(this.model).subscribe({                               // Lanzamos la petición
      next: (response: LoginResponse) => {

        request.unsubscribe();

        this.displayLoadingService.setShowDisplayLoading(false);                        // Ocultamos la pantalla de carga
        this.auth.setToken(response.jwt_token + '');                                    // Establecemos el token
        this.router.navigate(['/']);                                                    // Navegamos hasta la aplicación
      },
      error: (response) => {
        
        request.unsubscribe();
        
        this.displayLoadingService.setShowDisplayLoading(false);                        // En caso de error ocultamos la pantalla de carga
        
        // Indicamos el error ocurrido

        Swal.fire({                                                                     
          icon: 'error',
          title: 'Oops...',
          text: ((response.error.mensaje == undefined)? 'Servidor no disponible' : response.error.mensaje),
        })

        this.soundService.notify();                                                      // Lanzamos un sonido de notificación
      }
    })
    
  }

  /**
   * Vuelve a la pantalla de bienvenida
   */
  back() {
    this.router.navigate(['../welcome'], { relativeTo: this.route });
  }

  /**
   * Restaura la contraseña
   */
  restorePassword() {

    // Comprobamos si el dni es válido

    let inputDNI = document.querySelector("#dni.ng-valid") as HTMLInputElement;
    
    if (inputDNI != undefined) {

      // Si todo es correcto enviamos la petición

      this.auth.restorePassword(inputDNI.value).subscribe({
        next: (data: PersonDto) => {

          // Notificamos al usuario

          this.toastService.success(data.email, "Enviado enlace a");
          this.soundService.notify();
        },
        error: (error) => {

          // En caso de error lo indicamos

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
