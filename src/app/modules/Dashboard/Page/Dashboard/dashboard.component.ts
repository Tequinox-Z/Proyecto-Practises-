import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { UserService } from '../../Services/UserService/user.service';
import { PersonDto } from '../../../../core/Interfaces/personDto/person-dto';
import Swal from 'sweetalert2';
import { AuthService } from '../../../Auth/Services/Auth-service/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { School } from '../../../../core/Interfaces/school/school';
import { DisplayLoadingService } from '../../../../core/Services/DisplayLoading/display-loading.service';
import { DashboardService } from '../../Services/Dashboard-service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit, AfterViewInit {

  /* Paginas por defecto, dependiendo del rol se redirigirá a una ruta u otra */

  administratorDefaultPage : String = "center/my-center";                            // Ruta por defecto para el administrador
  teacherDefaultPage : String = "center/centers";                                                         // Ruta por defecto para al estudiante

  showActions: boolean = true;
  menu: boolean = false;

  roleAssign = "";
  
  constructor(
    private toastService: ToastrService, 
    private route: ActivatedRoute, 
    private router: Router, 
    private auth: AuthService, 
    public userService: UserService, 
    public displayLoadingService :DisplayLoadingService,
    public dashboardService: DashboardService) { }                                                                                // Rol asignado

  ngAfterViewInit() {
    this.displayLoadingService.setShowDisplayLoading(false);
  }

  ngOnInit(): void {
    this.initUser();
  }

  initUser() {
    this.dashboardService.setTitle("Dashboard");
    // Obtenemos el usuario

    this.userService.getUser()
    .subscribe({
      next: (response: PersonDto) => {

        this.userService.setPerson(response);                                                    // Establecemos el usuario

        // Dependiendo del tipo de usuario lo redirigimos a una subruta concreta

        switch(response.rol + "") {
          case "ROLE_ADMIN": {
            this.roleAssign = "Administrador";
            this.router.navigate([this.administratorDefaultPage], { relativeTo: this.route });           // En caso de que sea estudiante

            //  this.router.navigate([this.administratorDefaultPage]);     // En caso de que sea administrador
            break;
          }
          // case "ROLE_STUDENT": {
          //   this.roleAssign = "Estudiante";
          //   this.router.navigate([this.studentDefaultPage], { relativeTo: this.route });           // En caso de que sea estudiante
          //   break;
          // }          
          case "ROLE_TEACHER": {
            this.roleAssign = "Profesor";

            this.router.navigate([this.teacherDefaultPage], { relativeTo: this.route });           // En caso de que sea profesor
            break;
          }
          // case "ROLE_LABOR_TUTOR": {
          //   this.roleAssign = "Tutor laboral";

          //   this.router.navigate([this.teacherDefaultPage], { relativeTo: this.route });           // En caso de que sea profesor
          //   break;
          // }
          default: {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: "Error al cargar rol de usuario"
            })
          }
        }


      },
      error: (response) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: ((response.error.mensaje == undefined)? 'Servidor no disponible' : response.error.mensaje),        // En caso de error mostramos el error
        })
      }
  })

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
