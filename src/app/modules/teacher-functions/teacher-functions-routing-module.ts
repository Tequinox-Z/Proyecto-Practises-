import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewDegreesComponent } from './Pages/view-degrees/view-degrees.component';

const routes: Routes = [

      {
        path: 'viewDegrees',
        component: ViewDegreesComponent
      }

];

@NgModule({
  declarations: [ViewDegreesComponent],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
