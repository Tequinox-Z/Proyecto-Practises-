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

  constructor (
    private laborService: TutorServiceService
  ) { }

  tutors !: LaborTutor[];

  @Output() dni = new EventEmitter();

  @Input() cif = "";

  ngOnInit(): void {
    this.laborService.getTutorsFree().subscribe({
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
