import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../modules/Dashboard/Services/UserService/user.service';
import Swal from 'sweetalert2';
import { AuthService } from '../../../modules/Auth/Services/Auth-service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor (
    private userService: UserService,
    private auth: AuthService
  ) 
  { 
    
  }

  ngOnInit(): void {

  }


  /**
   * Confirma el cierre de sesión
   */
   exitConfirm() {
    document.querySelector("#optionsNav")?.classList.add("hidden");              // Ocultamos el menú
    
    Swal.fire({                                                                  // Preguntamos si desea salir
      title: '¿Cerrar sesión?',
      text: "Los cambios no guardados se perderán",
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Cerrar sesión'
    })
    .then((result) => {

      if (result.isConfirmed) {
        document.querySelector('html')!.classList.remove('gray');                // Si quiere salir desactivamos el escalado de grises
        document.querySelector('html')!.classList.remove('highConstrast');       // Desactivamos el alto contraste
  
        this.userService.setPerson(null);
        this.auth.logout();                                                      // Cerramos sesión
      }

    })
  }

}
