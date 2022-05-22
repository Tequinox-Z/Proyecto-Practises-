import { Component, OnInit } from '@angular/core';
import { ResetPaswordDTO } from '../../../../core/Interfaces/resetPaswordDTO/ResetPaswordDTO';
import { AuthService } from '../../Services/Auth-service/auth.service';
import { UserService } from '../../../Dashboard/Services/UserService/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RestError } from '../../../../core/Interfaces/restError/restError';
import { LoginResponse } from '../../../../core/Interfaces/login-response/login-response';
import { SoundService } from '../../../../core/Services/SoundFx/sound.service';

@Component({
  selector: 'app-restart-password',
  templateUrl: './restart-password.component.html',
  styleUrls: ['./restart-password.component.css']
})
export class RestartPasswordComponent implements OnInit {

  public model: ResetPaswordDTO = {                                                          // Este objeto almacenará el dni y contraseñá proporcionados por el usuario
    "password" : "",
    "passwordVerify" : ""
  }

  private token!: string | null;

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
  
  submit() {
    if (this.model.password == this.model.passwordVerify) {
      this.userService.setPassword(this.model.password!, this.route.snapshot.params["token-id"])
      .subscribe({
        next: (data: LoginResponse) => {
          this.toastService.success("Tu contraseña ha sido actualizada", "¡Hecho!");
          this.soundService.notify();
          this.auth.setToken(data.jwt_token + '');                                        // Establecemos el token
          this.router.navigate(['/']);                                                    // Navegamos hasta la aplicación  
        },
        error: (error) => {
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
