import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCenterComponent } from './Pages/my-center/my-center.component';
import { SearchCenterComponent } from './Pages/search-center/search-center.component';
import { NewCenterComponent } from './Pages/new-center/new-center.component';
import { ViewUbicationComponent } from '../../../../shared/Components/view-ubication/view-ubication.component';
import { UnusualMovementsComponent } from './Pages/unusual-movements/unusual-movements.component';
import { TemperatureHumidityComponent } from './Pages/temperature-humidity/temperature-humidity.component';
import { NoCenterSettedAdminGuard } from '../../../../core/Guards/noCenterGuard/no-center-setted-admin.guard';
import { AdministratorGuard } from '../../../../core/Guards/administrator-guard/administrator.guard';

// Rutas de centros

const routes: Routes = [
    {
      path: "centers",
      component: SearchCenterComponent,
      canDeactivate: [NoCenterSettedAdminGuard]
    },
    {
      path: "my-center",
      component: MyCenterComponent,
      canActivate: [AdministratorGuard]
    },
    {
      path: "new-center",
      component: NewCenterComponent,
      canDeactivate: [NoCenterSettedAdminGuard],
      canActivate: [AdministratorGuard]
    },
    {
      path: "ubication/:latitude/:longitude",
      component: ViewUbicationComponent
    },
    {
      path: "movements",
      component: UnusualMovementsComponent,
      canActivate: [AdministratorGuard]
    },
    {
      path: "temperature-humidity",
      component: TemperatureHumidityComponent,
      canActivate: [AdministratorGuard]
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
