import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCenterComponent } from './Pages/my-center/my-center.component';
import { SearchCenterComponent } from './Pages/search-center/search-center.component';
import { NewCenterComponent } from './Pages/new-center/new-center.component';
import { ViewUbicationComponent } from '../../../../shared/Components/view-ubication/view-ubication.component';
import { UnusualMovementsComponent } from './Pages/unusual-movements/unusual-movements.component';

const routes: Routes = [
    {
      path: "centers",
      component: SearchCenterComponent
    },
    {
      path: "my-center",
      component: MyCenterComponent
    },
    {
      path: "new-center",
      component: NewCenterComponent
    },
    {
      path: "ubication/:latitude/:longitude",
      component: ViewUbicationComponent
    },
    {
      path: "movements",
      component: UnusualMovementsComponent
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
