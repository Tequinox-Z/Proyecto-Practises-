import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from '../../core/Guards/auth-guard/auth-guard.guard';


// Rutas de funciones de profesor

const routes: Routes = [

      {
        path: 'degrees',
        loadChildren: () => import('./Pages/degrees/degrees.module').then( m =>                          // Administración de ciclos
          m.DegreesModule  
        ),
        canActivate: [AuthGuardGuard]
      },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
