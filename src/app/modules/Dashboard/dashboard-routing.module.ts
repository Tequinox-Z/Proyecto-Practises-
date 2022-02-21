import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Page/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'teacher',
        loadChildren: () => import('../teacher-functions/teacher-functions.module').then( m =>
          m.TeacherFunctionsModule  
        )
      },
      {
        path: 'student',
        loadChildren: () => import('../student-functions/student-functions.module').then( m =>
          m.StudentFunctionsModule  
        )
      },
      {
        path: 'administrator',
        loadChildren: () => import('../administrator-functions/administrator-functions.module').then( m =>
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
