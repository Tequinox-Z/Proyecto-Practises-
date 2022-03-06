import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Enrollment } from '../../../../../../core/Interfaces/enrollment/enrollment';
import { EnrollmentService } from '../../Services/EnrollmentService/enrollment.service';

@Component({
  selector: 'app-management-enrollments',
  templateUrl: './management-enrollments.component.html',
  styleUrls: ['./management-enrollments.component.css']
})
export class ManagementEnrollmentsComponent implements OnInit {


  constructor(private enrollmentService: EnrollmentService) { }
  
  enrollments: Enrollment[] = [];

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();


  ngOnInit(): void {
    this.enrollmentService.getAll()
    .subscribe({
      next: (response: Enrollment[]) => {
        this.enrollments = response;
        this.dtTrigger.next(this.enrollments);
      },
      error: () => {

      }
    })
  }
  

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  
}
