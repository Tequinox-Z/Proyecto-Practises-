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
        },
        {
          path: "business",
          loadChildren: () => import("./Modules/business/business.module").then( m => m.BusinessModule),
          canActivate: [AuthGuardGuard]
        },
        {
          path: "degrees",
          loadChildren: () => import("./Modules/degrees/degrees.module").then( m => m.DegreesModule),
          canActivate: [AuthGuardGuard]
        },
        {
          path: "practise",
          loadChildren: () => import("./Modules/practise/practise.module").then( m => m.PractiseModule),
          canActivate: [AuthGuardGuard]
        },
        {
          path: "person",
          loadChildren: () => import("./Modules/person/person.module").then( m => m.PersonModule),
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
