import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './core/guards/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/Dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'welcome',
    loadChildren: () => import('./modules/Welcome/welcome.module').then(m => m.WelcomeModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/Auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    loadChildren: () => import('./modules/Not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
