import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './Page/Welcome/welcome.component';


// Rutas de la pantalla de bienvenida

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent                                                                  // Ruta del componente principal de bienvenida
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { 
  
}
