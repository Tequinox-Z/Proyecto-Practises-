import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StudentService } from '../../Services/studentService/student.service';
import { Student } from '../../../core/Interfaces/student/student';

@Component({
  selector: 'app-select-student',
  templateUrl: './select-student.component.html',
  styleUrls: ['./select-student.component.css']
})
export class SelectStudentComponent implements OnInit {

  // Selección de estudiante

  constructor(
    private studentSrv: StudentService
  ) { }

  students !: Student[];                                        // Lista de estudiantes

  @Output() dni = new EventEmitter();

  ngOnInit(): void {
    // Cargamos los estudiantes

    let request =this.studentSrv.getAllStudents().subscribe({
      next: (studentsData : any) => {
        request.unsubscribe();

        this.students = studentsData;
      }
    });
  }

  // Emite el dni seleccionado
  select(dni: string) {
    this.dni.emit(dni);
  }


}
