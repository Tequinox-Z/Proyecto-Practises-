import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/Login/login.component';
import { RestartPasswordComponent } from './Pages/restart-password/restart-password.component';


// Rutas de autenticación

const routes: Routes = [
  {
    path: '',
    component: LoginComponent                                                  // Ruta de login
  },
  {
    path: 'reset-my-password/:token-id',
    component: RestartPasswordComponent                                        // Ruta de reseteo de contraseña
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }