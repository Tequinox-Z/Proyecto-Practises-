import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewBusinessComponent } from './Pages/new-business/new-business.component';
import { AuthGuardGuard } from '../../../../core/Guards/auth-guard/auth-guard.guard';

const routes: Routes = [
  {
    path: 'new-business',
    component: NewBusinessComponent,                                            // Función nueva empresa
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
export class BusinessRoutingModule { }
