import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementPersonsComponent } from './Pages/management-persons/management-persons.component';
import { NewPersonComponent } from './Pages/new-person/new-person.component';
import { AuthGuardGuard } from '../../../../core/Guards/auth-guard/auth-guard.guard';


// Rutas de personas

const routes: Routes = [
      {
        path: 'management-persons',
        component: ManagementPersonsComponent,                              // Ruta de administración de personas
        canActivate: [AuthGuardGuard]
      },
      {
        path: 'new-person',
        component: NewPersonComponent,                                      // Ruta para crear una nueva persona
        canActivate: [AuthGuardGuard]
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
