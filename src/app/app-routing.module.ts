import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './core/Guards/auth-guard/auth-guard.guard';
 

// Rutas principales de la aplicación

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/Dashboard/dashboard.module').then(m => m.DashboardModule),            // Módulo de Dashboard
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'welcome',
    loadChildren: () => import('./modules/Welcome/welcome.module').then(m => m.WelcomeModule)                   // Bienvenida
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/Auth/auth.module').then(m => m.AuthModule)                            // Módulo de autenticación
  },
  {
    path: '**',
    loadChildren: () => import('./modules/Not-found/not-found.module').then(m => m.NotFoundModule)              // Módulo de no encontrado
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
