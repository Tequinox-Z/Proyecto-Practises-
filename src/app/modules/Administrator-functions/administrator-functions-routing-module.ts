import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
      {
        path: 'centers',
        loadChildren: () => import('./Pages/Centers/centers.module').then( m =>
          m.CentersModule  
        )
      },
      {
        path: 'persons',
        loadChildren: () => import('./Pages/Persons/persons.module').then( m =>
          m.PersonsModule  
        )
      },
      {
        path: 'students',
        loadChildren: () => import('./Pages/Students/students.module').then( m =>
          m.StudentsModule  
        )
      },
      {
        path: 'degrees',
        loadChildren: () => import('./Pages/Degrees/degrees.module').then( m =>
          m.DegreesModule  
        )
      },
      {
        path: 'business',
        loadChildren: () => import('./Pages/Business/business.module').then( m =>
          m.BusinessModule  
        )
      }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdministratorRoutingModule { }
