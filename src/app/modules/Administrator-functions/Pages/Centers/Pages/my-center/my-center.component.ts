import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../../../../../Dashboard/Services/UserService/user.service';
import { CentersService } from '../../Services/Centers-service/Centers.service';
import { School } from 'src/app/core/Interfaces/school/school';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-center',
  templateUrl: './my-center.component.html',
  styleUrls: ['./my-center.component.css']
})
export class MyCenterComponent implements OnInit {

  constructor(private centerService: CentersService, private userService: UserService) { }

  currentSchool!: School;
  @Output() notification: EventEmitter<String> = new EventEmitter<String>();

  ngOnInit(): void {
    this.centerService.getMyCenter(this.userService.getDni()).subscribe({
      next: (school: School) => {
        this.currentSchool = school;
      },
      error: (response) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: ((response.error.mensaje == undefined)? 'Servidor no disponible' : response.error.mensaje),
        })
      }
    })
  }

  settedSchool(school: School) {
    this.notification.emit('Centro asignado correctamente');
    this.currentSchool = school;
  }
}
