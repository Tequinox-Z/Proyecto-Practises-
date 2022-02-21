import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyMatriculesComponent } from './Pages/my-matricules/my-matricules.component';

const routes: Routes = [

      {
        path: 'my-matricules',
        component: MyMatriculesComponent
      }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
