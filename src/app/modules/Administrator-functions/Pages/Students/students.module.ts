import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsRoutingModule } from './students-routing-module';
import { DataTablesModule } from 'angular-datatables';
import { ManagementEnrollmentsComponent } from './Pages/management-enrollments/management-enrollments.component';
import { NewEnrollmentComponent } from './Pages/new-enrollment/new-enrollment.component';



@NgModule({
  declarations: [ManagementEnrollmentsComponent, NewEnrollmentComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    DataTablesModule
  ]
})
export class StudentsModule { }
