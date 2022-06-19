import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../../modules/Dashboard/Services/UserService/user.service';
import Swal from 'sweetalert2';
import { AuthService } from '../../../modules/Auth/Services/Auth-service/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // Componente de menú

  @Output() accesibility = new EventEmitter();                           

  constructor (
    private userService: UserService,
    private auth: AuthService,
    private router: Router,
    private rutaActiva: ActivatedRoute
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

  // Redirige al usuario actual

  myUser() {
    this.router.navigateByUrl("dashboard/person/management/" +  this.userService.getDni() + "/edit");
  }


  accesibilityShow() {
    this.accesibility.emit();
  }

}
