import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCenterComponent } from './Pages/my-center/my-center.component';
import { FindCentersComponent } from './Pages/find-centers/find-centers.component';
import { NewCenterComponent } from './Pages/new-center/new-center.component';

const routes: Routes = [
      {
        path: 'my-center',
        component: MyCenterComponent
      },
      {
        path: 'find-centers',
        component: FindCentersComponent
      },
      {
        path: 'new-center',
        component: NewCenterComponent
      }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CentersRoutingModule { }
