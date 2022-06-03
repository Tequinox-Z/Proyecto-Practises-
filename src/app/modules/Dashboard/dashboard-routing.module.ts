import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { DashboardComponent } from './Page/Dashboard/dashboard.component';
import { AuthGuardGuard } from '../../core/Guards/auth-guard/auth-guard.guard';


// Rutas del DashBoard

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
        {
          path: "center",
          loadChildren: () => import("./Modules/center/center.module").then( m => m.CenterModule),
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
