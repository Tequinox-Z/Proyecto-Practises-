import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../../Services/UserService/user.service';
import { PersonDto } from '../../../../core/interfaces/personDto/person-dto';
import Swal from 'sweetalert2';
import { AuthService } from '../../../Auth/Services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private auth: AuthService, private userService: UserService) { }

  person!: PersonDto;
  rol!: string;

  ngOnInit(): void {
    
    this.userService.getUser()
    .subscribe({
      next: (response) => {
        this.person = response;
        this.rol = response.rol?.toString()!;

        switch(this.rol) {
          case "ROLE_ADMIN": {
            this.router.navigate(['administrator/my-center'], { relativeTo: this.route });
            break;
          }
          case "ROLE_STUDENT": {
            this.router.navigate(['student'], { relativeTo: this.route });
            break;
          }          
          case "ROLE_TEACHER": {
            this.router.navigate(['teacher/viewDegrees'], { relativeTo: this.route });
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

}
