import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPractiseComponent } from './Pages/view-practise/view-practise.component';

// Rutas de prácticas

const routes: Routes = [
    {
      path: "view/:idEnrollment",
      component: ViewPractiseComponent
    }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PractiseRoutingModule { }
