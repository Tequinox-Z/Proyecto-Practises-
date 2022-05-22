import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewDegreesComponent } from './Pages/view-degrees/view-degrees.component';

const routes: Routes = [

      {
        path: 'view-degrees',
        component: ViewDegreesComponent                                                      // Vista de ciclos
      },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DegreesRoutingModule { }
