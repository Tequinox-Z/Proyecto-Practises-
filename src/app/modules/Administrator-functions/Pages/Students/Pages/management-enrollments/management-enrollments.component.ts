import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Enrollment } from '../../../../../../core/Interfaces/enrollment/enrollment';
import { EnrollmentService } from '../../Services/EnrollmentService/enrollment.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-management-enrollments',
  templateUrl: './management-enrollments.component.html',
  styleUrls: ['./management-enrollments.component.css']
})
export class ManagementEnrollmentsComponent implements OnInit {


  constructor(private enrollmentService: EnrollmentService) { }
  

  enrollments: Enrollment[] = [];                                                          // Lista de matrículas

  dtOptions: DataTables.Settings = {};                                                     // Opciones de la datatable
  dtTrigger: Subject<any> = new Subject<any>();                                            // Trigger de la datatable


  ngOnInit(): void {

    // Obtenemos todas las matrículas

    this.enrollmentService.getAll()
    .subscribe({
      next: (response: Enrollment[]) => {

        this.enrollments = response;                                                      // Asignamos todas las matrículas
        this.dtTrigger.next(this.enrollments);                                            // Asignamos las matrículas

      },
      error: (response) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: ((response.error.mensaje == undefined)? 'Servidor no disponible' : response.error.mensaje)      // Mostramos error
        })
      }
    })
  }
  

  /**
   * Nos desubscribimos del trigger de la datatable
   */
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  
}
