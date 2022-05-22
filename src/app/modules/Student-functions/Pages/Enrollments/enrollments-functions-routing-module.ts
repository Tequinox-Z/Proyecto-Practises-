import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyMatriculesComponent } from './Pages/My-matricules/my-matricules.component';
import { AuthGuardGuard } from '../../../../core/Guards/auth-guard/auth-guard.guard';

const routes: Routes = [
    {
      path: 'my-matricules',
      component: MyMatriculesComponent,
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
export class EnrollmentsRoutingModule { }
