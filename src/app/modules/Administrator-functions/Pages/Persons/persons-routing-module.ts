import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementPersonsComponent } from './Pages/management-persons/management-persons.component';
import { NewPersonComponent } from './Pages/new-person/new-person.component';

const routes: Routes = [
      {
        path: 'management-persons',
        component: ManagementPersonsComponent
      },
      {
        path: 'new-person',
        component: NewPersonComponent
      }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PersonsRoutingModule { }
