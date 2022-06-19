import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonManagementComponent } from './Pages/person-management/person-management.component';
import { EditPersonComponent } from './Pages/edit-person/edit-person.component';
import { AdministratorGuard } from '../../../../core/Guards/administrator-guard/administrator.guard';


// Rutas de personas


const routes: Routes = [
    {
      path: "management",
      component: PersonManagementComponent,
      canActivate: [AdministratorGuard]
    },
    {
      path: "management/:dni/edit",
      component: EditPersonComponent
    }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PersonRoutingModule { }