import { Component, OnInit } from '@angular/core';
import { ResetPaswordDTO } from '../../../../core/Interfaces/resetPaswordDTO/ResetPaswordDTO';
import { AuthService } from '../../Services/Auth-service/auth.service';
import { UserService } from '../../../Dashboard/Services/UserService/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginResponse } from '../../../../core/Interfaces/login-response/login-response';
import { SoundService } from '../../../../core/Services/SoundFx/sound.service';


// Pantalla de reseteo de contraseña


@Component({
  selector: 'app-restart-password',
  templateUrl: './restart-password.component.html',
  styleUrls: ['./restart-password.component.css']
})
export class RestartPasswordComponent implements OnInit {

  public model: ResetPaswordDTO = {                                             // Este objeto almacenará el dni y contraseñá proporcionados por el usuario
    "password" : "",
    "passwordVerify" : ""
  }

  private token!: string | null;                                                // Token generado para la recuperación de contraseña

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService,
    private toastService: ToastrService,
    private soundService: SoundService
  ) {}

  ngOnInit(): void { 
  }
  
  /**
   * Envía y establece la nueva contraseña
   */
  submit() {

    // Comprobamos que la contraseña sea válida

    if (this.model.password == this.model.passwordVerify) {

      // Lanzamos la petición

      let request = this.userService.setPassword(this.model.password!, this.route.snapshot.params["token-id"])
      .subscribe({
        next: (data: LoginResponse) => {
          request.unsubscribe();
          // En caso de éxito informamos al usuario y lo redirigimos a la pantalla de bienvenida

          this.toastService.success("Tu contraseña ha sido actualizada", "¡Hecho!");
          this.soundService.notify();
          this.auth.setToken(data.jwt_token + '');                                        // Establecemos el token
          this.router.navigate(['/']);                                                    // Navegamos hasta la aplicación  
        },
        error: (error) => {
          request.unsubscribe();
          
          // En caso de error informamos al usuario 

          if (error.error.mensaje == null) {
            this.toastService.error("Error", "Token expirado o no válido");
          }
          else {
            this.toastService.error("Error", error.error.mensaje);
          }

          this.soundService.notify();
        }  
      });
    
    }
  }
  
}
