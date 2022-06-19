import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBusinessComponent } from './Pages/search-business/search-business.component';
import { ViewUbicationComponent } from '../../../../shared/Components/view-ubication/view-ubication.component';
import { NewBusinessComponent } from './Pages/new-business/new-business.component';
import { EditBusinessComponent } from './Pages/edit-business/edit-business.component';
import { AdministratorGuard } from '../../../../core/Guards/administrator-guard/administrator.guard';

// Rutas de empresa

const routes: Routes = [
    {
      path: "search-business",
      component: SearchBusinessComponent
    },
    {
      path: "new-business",
      component: NewBusinessComponent,
      canActivate: [AdministratorGuard]
    },
    {
      path: "ubication/:latitude/:longitude",
      component: ViewUbicationComponent
    },
    {
      path: "search-business/edit/:cif",
      component: EditBusinessComponent
    }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
