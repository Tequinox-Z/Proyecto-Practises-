import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../../Services/UserService/user.service';
import { PersonDto } from '../../../../core/Interfaces/personDto/person-dto';
import Swal from 'sweetalert2';
import { AuthService } from '../../../Auth/Services/Auth-service/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  /* Paginas por defecto */

  administratorDefaultPage : String = "administrator/centers/my-center";
  teacherDefaultPage : String = "student/";
  studentDefaultPage : String = "teacher/degrees/viewDegrees";

  constructor(private toastService: ToastrService, private route: ActivatedRoute, private router: Router, private auth: AuthService, private userService: UserService) { }

  person!: PersonDto;
  rol!: string;

  ngOnInit(): void {
    
    this.userService.getUser()
    .subscribe({
      next: (response: PersonDto) => {
        this.userService.setDni(response.dni!);
        this.person = response;
        this.rol = response.rol?.toString()!;

        switch(this.rol) {
          case "ROLE_ADMIN": {
            this.router.navigate([this.administratorDefaultPage], { relativeTo: this.route });
            break;
          }
          case "ROLE_STUDENT": {
            this.router.navigate([this.studentDefaultPage], { relativeTo: this.route });
            break;
          }          
          case "ROLE_TEACHER": {
            this.router.navigate([this.teacherDefaultPage], { relativeTo: this.route });
            break;
          }
        }


      },
      error: (response) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: ((response.error.mensaje == undefined)? 'Servidor no disponible' : response.error.mensaje),
          /*footer: '<a href="">Why do I have this issue?</a>'*/
        })
      }
  })
  }

  menuToggle() {
    document.querySelector("#menu")?.classList.toggle("close");
    document.querySelector("#optionsNav")?.classList.add("hidden");

  }

  userToggle() {
    document.querySelector("#optionsNav")?.classList.toggle("hidden");
    document.querySelector("#menu")?.classList.add("close");
  }


  closeMenus() {
    document.querySelector("#menu")?.classList.add("close");
    document.querySelector("#optionsNav")?.classList.add("hidden");
  }

  exitConfirm() {
    document.querySelector("#optionsNav")?.classList.add("hidden");
    Swal.fire({
      title: '¿Cerrar sesión?',
      text: "Los cambios no guardados se perderán",
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Cerrar sesión'
    })
    .then((result) => {

      if (result.isConfirmed) {
        document.querySelector('html')!.classList.remove('gray');
        document.querySelector('html')!.classList.remove('highConstrast');

        this.auth.logout();
      }

    })
  }

  changeVisiblityOfAccesibility() {
    document.querySelector("#accesibility")!.classList.toggle("noShow");
  }

  changeVisiblityOfSettings() {
    document.querySelector("#settings")!.classList.toggle("noShow");
  }

  changeGray() {
    let btnGray = document.querySelector("#btn-b") as HTMLInputElement;
    btnGray.checked = false;
    document.querySelector('html')!.classList.remove('highConstrast');

    document.querySelector('html')!.classList.toggle('gray');
  }

  changeConstrast() {
    let btnGray = document.querySelector("#btn-a") as HTMLInputElement;
    btnGray.checked = false;
    document.querySelector('html')!.classList.remove('gray');

    document.querySelector('html')!.classList.toggle('highConstrast');
  }


  showMessage(message: Event) {
    this.toastService.success('FF','', {
      progressBar: true,
      progressAnimation: 'increasing'
    });
  }

}
