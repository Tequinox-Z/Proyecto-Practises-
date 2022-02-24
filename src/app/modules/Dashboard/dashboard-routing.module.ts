import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Page/Dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'teacher',
        loadChildren: () => import('../Teacher-functions/teacher-functions.module').then( m =>
          m.TeacherFunctionsModule  
        )
      },
      {
        path: 'student',
        loadChildren: () => import('../Student-functions/student-functions.module').then( m =>
          m.StudentFunctionsModule  
        )
      },
      {
        path: 'administrator',
        loadChildren: () => import('../Administrator-functions/administrator-functions.module').then( m =>
          m.AdministratorFunctionsModule
        )
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
