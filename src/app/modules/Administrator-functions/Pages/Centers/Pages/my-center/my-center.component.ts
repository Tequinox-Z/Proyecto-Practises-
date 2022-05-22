import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../../../../../Dashboard/Services/UserService/user.service';
import { CentersService } from '../../Services/Centers-service/Centers.service';
import { School } from 'src/app/core/Interfaces/school/school';
import { Administrator } from '../../../../../../core/Interfaces/administrator/administrator';
import { ProfessionalDegree } from '../../../../../../core/Interfaces/professionalDegree/professional-degree';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { DashboardService } from '../../../../../Dashboard/Services/Dashboard-service/dashboard.service';

@Component({
  selector: 'app-my-center',
  templateUrl: './my-center.component.html',
  styleUrls: ['./my-center.component.css']
})
export class MyCenterComponent implements OnInit {

  constructor(
    private centerService: CentersService,
    private userService: UserService,
    private dashboardService: DashboardService
    ) { }

  now!: Date;

  currentSchool!: School;
  @Output() notification: EventEmitter<String> = new EventEmitter<String>();

  ngOnInit(): void {

    this.now = new Date();
    setInterval(() => {
      this.now = new Date();
    }, 1000);

    this.centerService.getMyCenter(this.userService.getDni()).subscribe({
      next: (school: School) => {
          this.currentSchool = school;
          this.getAditionalInfoCenter();
          this.centerService.setIdSchool(this.currentSchool.id!);
      },
      error: (error: HttpErrorResponse) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: '¡Bienvenido!',
          text: 'Para comenzar, elige la escuela que administras',
          showConfirmButton: false,
          timer: 5000
        })
        this.dashboardService.setDisableNav(true);
      }  
    })
  }

  settedSchool(school: School) {
    this.notification.emit('Centro asignado correctamente');
    this.currentSchool = school;
    this.getAditionalInfoCenter();
    this.centerService.setIdSchool(school.id!);
    this.dashboardService.setDisableNav(false);
  }


  getAditionalInfoCenter() {
    this.centerService.getAdministratorsFromCenter(this.currentSchool.id + '')
    .subscribe({
      next: (response: Administrator[]) => {
        this.currentSchool.administrators = response;
      },
      error: (response: HttpErrorResponse) => {

      }
    })

    this.centerService.getProfessionalDegreesFromCenter(this.currentSchool.id + '')
    .subscribe(
      {
      next: (response: ProfessionalDegree[]) => {
        this.currentSchool.professionalDegrees = response;
      },
      error: response => {
        
      }
    })
  }
}
