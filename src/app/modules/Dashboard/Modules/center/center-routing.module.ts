import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCenterComponent } from './Pages/my-center/my-center.component';
import { SearchCenterComponent } from './Pages/search-center/search-center.component';

const routes: Routes = [
    {
      path: "centers",
      component: SearchCenterComponent
    },
    {
      path: "my-center",
      component: MyCenterComponent
    }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CenterRoutingModule { }
