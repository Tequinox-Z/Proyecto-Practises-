import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BusinessService } from '../../../modules/Dashboard/Modules/business/Service/business.service';
import { Teacher } from '../../../core/Interfaces/teacher/teacher';
import { TeacherServiceService } from '../../Services/teacherService/teacher-service.service';

@Component({
  selector: 'app-select-teacher',
  templateUrl: './select-teacher.component.html',
  styleUrls: ['./select-teacher.component.css']
})
export class SelectTeacherComponent implements OnInit {

  constructor(
    private teacherSrv: TeacherServiceService
  ) { }

  teachers !: Teacher[];

  @Output() dni = new EventEmitter();

  ngOnInit(): void {
    this.teacherSrv.getAllTeachers().subscribe({
      next: (teachersData : any) => {
        this.teachers = teachersData;
      }
    });
  }

  select(dni: string) {
    this.dni.emit(dni);
  }


}
