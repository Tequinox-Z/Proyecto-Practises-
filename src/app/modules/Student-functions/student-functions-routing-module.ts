import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from '../../core/Guards/auth-guard/auth-guard.guard';

// Rutas de funciones de estudiantes

const routes: Routes = [
    {
      path: 'enrollments',
      loadChildren: () => import('./Pages/Enrollments/enrollments.module').then( m =>                              // Gestión de matrículas
        m.EnrollmentsModule
      ),
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
export class StudentRoutingModule { }
