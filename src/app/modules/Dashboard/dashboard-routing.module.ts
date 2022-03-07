import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Page/Dashboard/dashboard.component';
import { AuthGuardGuard } from '../../core/Guards/auth-guard/auth-guard.guard';


// Rutas del DashBoard

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'teacher',
        loadChildren: () => import('../Teacher-functions/teacher-functions.module').then( m =>                            // Ruta de profesor
          m.TeacherFunctionsModule  
        ),
        canActivate: [AuthGuardGuard]
      },
      {
        path: 'student',
        loadChildren: () => import('../Student-functions/student-functions.module').then( m =>                            // Ruta de estudiante
          m.StudentFunctionsModule
        ),
        canActivate: [AuthGuardGuard]
      },
      {
        path: 'administrator',
        loadChildren: () => import('../Administrator-functions/administrator-functions.module').then( m =>                // Ruta de administrador
          m.AdministratorFunctionsModule
        ),
        canActivate: [AuthGuardGuard]
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
