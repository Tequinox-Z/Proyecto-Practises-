import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/UserService/user.service';
import { PersonDto } from '../../../../core/interfaces/personDto/person-dto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userService: UserService) { }

  person!: PersonDto;
  rol!: string;

  ngOnInit(): void {
    console.log();
    this.userService.getUser()
    .subscribe({
      next: (response) => {
        this.person = response;
        this.rol = response.rol?.toString()!;
      },
      error: (response) => {
        console.log(response)
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
  }
}
