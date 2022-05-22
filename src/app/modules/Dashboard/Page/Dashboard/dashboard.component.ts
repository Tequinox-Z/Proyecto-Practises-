import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../../Services/UserService/user.service';
import { PersonDto } from '../../../../core/Interfaces/personDto/person-dto';
import Swal from 'sweetalert2';
import { AuthService } from '../../../Auth/Services/Auth-service/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CentersService } from '../../../Administrator-functions/Pages/Centers/Services/Centers-service/Centers.service';
import { School } from '../../../../core/Interfaces/school/school';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  /* Paginas por defecto, dependiendo del rol se redirigirá a una ruta u otra */

  administratorDefaultPage : String = "administrator/centers/my-center";                            // Ruta por defecto para el administrador
  teacherDefaultPage : String = "student/";                                                         // Ruta por defecto para al estudiante
  studentDefaultPage : String = "teacher/degrees/viewDegrees";                                      // Ruta por defecto para al profesor

  constructor(private toastService: ToastrService, private route: ActivatedRoute, private router: Router, private auth: AuthService, private userService: UserService, public centerService: CentersService) { }

  person!: PersonDto;                                                                              // Persona actual
  rol!: string;                                                                                    // Rol asignado

  ngOnInit(): void {

    
    // Obtenemos el usuario

    this.userService.getUser()
    .subscribe({
      next: (response: PersonDto) => {

        this.userService.setDni(response.dni!);                                                    // Establecemos el dni
        this.person = response;                                                                    // Establecemos la persona
        this.rol = response.rol?.toString()!;                                                      // Establecemos el rol


        // Dependiendo del tipo de usuario lo redirigimos a una subruta concreta

        switch(this.rol) {
          case "ROLE_ADMIN": {

            // Obtenemos el centro
            
            this.centerService.getMyCenter(this.userService.getDni()).subscribe({
              next: (school: School) => {
                  this.centerService.setIdSchool(school.id!);
              },
              error: (response) => {
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: ((response.error.mensaje == undefined)? 'Servidor no disponible' : response.error.mensaje),        // En caso de error mostramos el error
                  /*footer: '<a href="">Why do I have this issue?</a>'*/
                })
              }
            });
            this.router.navigate([this.administratorDefaultPage], { relativeTo: this.route });     // En caso de que sea administrador
            break;
          }
          case "ROLE_STUDENT": {
            this.router.navigate([this.studentDefaultPage], { relativeTo: this.route });           // En caso de que sea estudiante
            break;
          }          
          case "ROLE_TEACHER": {
            this.router.navigate([this.teacherDefaultPage], { relativeTo: this.route });           // En caso de que sea profesor
            break;
          }
        }


      },
      error: (response) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: ((response.error.mensaje == undefined)? 'Servidor no disponible' : response.error.mensaje),        // En caso de error mostramos el error
          /*footer: '<a href="">Why do I have this issue?</a>'*/
        })
      }
  })
  }

  /**
   * Cambia la visibilidad del menú
   */
  menuToggle() {
    document.querySelector("#menu")?.classList.toggle("close");                                // Oculta el menú del usuario
    document.querySelector("#optionsNav")?.classList.add("hidden");                            // Oculta las opciones del nav

  }

  /**
   * Cambia la visibilidad del menú de usuario
   */
  userToggle() {
    document.querySelector("#optionsNav")?.classList.toggle("hidden");                          // Cambia la visibilidad del nav
    document.querySelector("#menu")?.classList.add("close");                                    // Cierra el menú
  }


  /**
   * Cierra los menús
   */
  closeMenus() {
    document.querySelector("#menu")?.classList.add("close");                        // Cambiamos la visibilidad del menú
    document.querySelector("#optionsNav")?.classList.add("hidden");                 // Cambiamos la visibilidad de las opciones del nav
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

        this.auth.logout();                                                      // Cerramos sesión
      }

    })
  }

  /**
   * Muestra u oculta la accesibildiad
   */
  changeVisiblityOfAccesibility() {
    document.querySelector("#accesibility")!.classList.toggle("noShow");                    // Cambiamos la visibilidad
  }

  /**
   * Muestra u oculta los ajustes
   */
  changeVisiblityOfSettings() {
    document.querySelector("#settings")!.classList.toggle("noShow");                        // Cambiamos la visibilidad
  }

  /**
   * Cambia el escalado de grises
   */
  changeGray() {
    let btnGray = document.querySelector("#btn-b") as HTMLInputElement;                      // Obtenemos el botón
    btnGray.checked = false;                                                                 // Desactivamos el botón
    document.querySelector('html')!.classList.remove('highConstrast');                       // Deshabilitamos el alto constraste

    document.querySelector('html')!.classList.toggle('gray');                                // Actualizamos la escala de grises  
  }



  /**
   * Cambia el constraste de la aplicación
   */
  changeConstrast() {
    let btnGray = document.querySelector("#btn-a") as HTMLInputElement;              // Obtenemos el botón
    btnGray.checked = false;                                                         // Lo deseleccionamos
    document.querySelector('html')!.classList.remove('gray');                        // Desactivamos el escalado de grises

    document.querySelector('html')!.classList.toggle('highConstrast');               // Actualizamos el contraste
  }



/**
 * Muestra mensajes toast
 * @param message mensaje
 */
  showMessage(message: Event) {
    this.toastService.success('FF','', {
      progressBar: true,                                                            // Muestra la barra de progreso
      progressAnimation: 'increasing'                                               // Muestra la animación incrementando
    });
  }

}
