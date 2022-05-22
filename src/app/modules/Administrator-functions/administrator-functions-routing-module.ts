import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from '../../core/Guards/auth-guard/auth-guard.guard';


// Rutas de las funciones del administrador

const routes: Routes = [
      {
        path: 'centers',
        loadChildren: () => import('./Pages/Centers/centers.module').then( m =>                            // Módulo de centros                              
          m.CentersModule  
        ),
        canActivate: [AuthGuardGuard]
      },
      {
        path: 'persons',
        loadChildren: () => import('./Pages/Persons/persons.module').then( m =>                            // Módulo de personas
          m.PersonsModule  
        ),
        canActivate: [AuthGuardGuard]
      },
      {
        path: 'students',
        loadChildren: () => import('./Pages/Students/students.module').then( m =>                          // Módulo de estudiantes
          m.StudentsModule  
        ),
        canActivate: [AuthGuardGuard]
      },
      {
        path: 'degrees',
        loadChildren: () => import('./Pages/Degrees/degrees.module').then( m =>                            // Módulo de ciclos
          m.DegreesModule  
        ),
        canActivate: [AuthGuardGuard]
      },
      {
        path: 'business',
        loadChildren: () => import('./Pages/Business/business.module').then( m =>                          // Módulos de empresas
          m.BusinessModule  
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
export class AdministratorRoutingModule { }
