import { TutorServiceService } from './../../Services/tutorService/tutor-service.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { StudentService } from '../../Services/studentService/student.service';
import { Student } from '../../../core/Interfaces/student/student';
import { LaborTutor } from '../../../core/Interfaces/LaborTutor/LaborTutor';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-select-tutor',
  templateUrl: './select-tutor.component.html',
  styleUrls: ['./select-tutor.component.css']
})
export class SelectTutorComponent implements OnInit {

  constructor(
    private laborService: TutorServiceService
  ) { }

  tutors !: LaborTutor[];

  @Output() dni = new EventEmitter();

  @Input() cif = "";

  ngOnInit(): void {
    this.laborService.getTutors(this.cif).subscribe({
      next: (data: any) => {
        this.tutors = data;
      },
      error: (response) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text:  response.error.mensaje
        });
      }
    });
  }

  select(dni: string) {
    this.dni.emit(dni);
  }


}
