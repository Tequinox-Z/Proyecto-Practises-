import { NgModule } from '@angular/core';
import { NotFoundComponent } from './Page/not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';

// Rutas no encontradas

const router: Routes = [
  {
    path: '',
    component: NotFoundComponent                                                        // Componente principal de no encontrado
  }
]


@NgModule({
  imports: [RouterModule.forChild(router)],
  exports: [RouterModule]
})
export class NotFoundRoutingModule { }
