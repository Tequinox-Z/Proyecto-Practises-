import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

      {
        path: 'degrees',
        loadChildren: () => import('./Pages/degrees/degrees.module').then( m =>
          m.DegreesModule  
        )
      },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
