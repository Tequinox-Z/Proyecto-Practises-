import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StudentService } from '../../Services/studentService/student.service';
import { Student } from '../../../core/Interfaces/student/student';

@Component({
  selector: 'app-select-student',
  templateUrl: './select-student.component.html',
  styleUrls: ['./select-student.component.css']
})
export class SelectStudentComponent implements OnInit {

  constructor(
    private studentSrv: StudentService
  ) { }

  students !: Student[];

  @Output() dni = new EventEmitter();

  ngOnInit(): void {
    this.studentSrv.getAllStudents().subscribe({
      next: (studentsData : any) => {
        this.students = studentsData;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  select(dni: string) {
    this.dni.emit(dni);
  }


}
