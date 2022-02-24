import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementEnrollmentsComponent } from './Pages/management-enrollments/management-enrollments.component';
import { NewEnrollmentComponent } from './Pages/new-enrollment/new-enrollment.component';

const routes: Routes = [
      {
        path: 'management-enrollments',
        component: ManagementEnrollmentsComponent
      },
      {
        path: 'new-enrollment',
        component: NewEnrollmentComponent
      }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
