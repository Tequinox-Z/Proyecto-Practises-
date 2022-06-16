import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonManagementComponent } from './Pages/person-management/person-management.component';
import { EditPersonComponent } from './Pages/edit-person/edit-person.component';

const routes: Routes = [
    {
      path: "management",
      component: PersonManagementComponent
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