import { TutorServiceService } from '../../Services/tutorService/tutor-service.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { LaborTutor } from '../../../core/Interfaces/LaborTutor/LaborTutor';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-select-tutor-whitoutBusiness',
  templateUrl: './select-tutorWhitoutBusiness.component.html',
  styleUrls: ['./select-tutorWhitoutBusiness.component.css']
})
export class SelectTutorWhitoutBusinessComponent implements OnInit {


  // Modal de selección de tutor sin empresa


  constructor (
    private laborService: TutorServiceService
  ) { }

  tutors !: LaborTutor[];                                                    // Tutores

  @Output() dni = new EventEmitter();                                        // Dni seleccionado


  ngOnInit(): void {

    // Cargamos los tutores

    let request =this.laborService.getTutorsFree().subscribe({
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

  // Emite el dni seleccionado
  select(dni: string) {
    this.dni.emit(dni);
  }


}
