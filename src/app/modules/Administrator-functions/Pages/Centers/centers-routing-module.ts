import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCenterComponent } from './Pages/my-center/my-center.component';
import { FindCentersComponent } from './Pages/find-centers/find-centers.component';
import { NewCenterComponent } from './Pages/new-center/new-center.component';
import { AuthGuardGuard } from '../../../../core/Guards/auth-guard/auth-guard.guard';


// Rutas de administración de centros

const routes: Routes = [
      {
        path: 'my-center',
        component: MyCenterComponent,                                            // Función Mi centro
        canActivate: [AuthGuardGuard]
      },
      {
        path: 'find-centers',
        component: FindCentersComponent,                                         // Función Buscar centros
        canActivate: [AuthGuardGuard]
      },
      {
        path: 'new-center',
        component: NewCenterComponent,                                           //  Función de nuevo centro
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
export class CentersRoutingModule { }
