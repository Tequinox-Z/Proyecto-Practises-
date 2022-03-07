import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../../../../../Dashboard/Services/UserService/user.service';
import { CentersService } from '../../Services/Centers-service/Centers.service';
import { School } from 'src/app/core/Interfaces/school/school';
import { Administrator } from '../../../../../../core/Interfaces/administrator/administrator';
import { ProfessionalDegree } from '../../../../../../core/Interfaces/professionalDegree/professional-degree';

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
          this.getAditionalInfoCenter();
      },
      error: () => {
        
      }  
    })
  }

  settedSchool(school: School) {
    this.notification.emit('Centro asignado correctamente');
    this.currentSchool = school;
    this.getAditionalInfoCenter();
  }


  getAditionalInfoCenter() {
    this.centerService.getAdministratorsFromCenter(this.currentSchool.id + '')
    .subscribe({
      next: (response: Administrator[]) => {
        this.currentSchool.administrators = response;
      },
      error: () => {

      }
    })

    this.centerService.getProfessionalDegreesFromCenter(this.currentSchool.id + '')
    .subscribe({
      next: (response: ProfessionalDegree[]) => {
        this.currentSchool.professionalDegrees = response;
      },
      error: () => {

      }
    })
  }
}
