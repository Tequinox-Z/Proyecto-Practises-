import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementEnrollmentsComponent } from './Pages/management-enrollments/management-enrollments.component';
import { NewEnrollmentComponent } from './Pages/new-enrollment/new-enrollment.component';
import { AuthGuardGuard } from '../../../../core/Guards/auth-guard/auth-guard.guard';


/**
 * Funciones de estudiantes
 */
const routes: Routes = [
      {
        path: 'management-enrollments',
        component: ManagementEnrollmentsComponent,                                        // Administración de matrículas
        canActivate: [AuthGuardGuard]
      },
      {
        path: 'new-enrollment',
        component: NewEnrollmentComponent,                                                // Crea una nueva matrícula
        canActivate: [AuthGuardGuard]
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
