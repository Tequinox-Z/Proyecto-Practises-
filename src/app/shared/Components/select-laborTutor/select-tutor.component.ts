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


  // Modal de selección de tutor 

  constructor(
    private laborService: TutorServiceService
  ) { }

  tutors !: LaborTutor[];                                          // Tutores

  @Output() dni = new EventEmitter();                              // Dni seleccionado

  @Input() cif = "";                                               // Cif

  ngOnInit(): void {

    // Cargamos los tutores

    let request =this.laborService.getTutors(this.cif).subscribe({
      next: (data: any) => {

        request.unsubscribe();

        this.tutors = data;
      },
      error: (response) => {

        request.unsubscribe();

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text:  response.error.mensaje
        });
      }
    });
  }

  // Selecciona un tutor
  
  select(dni: string) {
    this.dni.emit(dni);
  }


}
