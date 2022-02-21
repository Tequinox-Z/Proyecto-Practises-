import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministratorRoutingModule } from './administrator-functions-routing-module';
import { MyCenterComponent } from './Pages/my-center/my-center.component';
import { FindCentersComponent } from './Pages/find-centers/find-centers.component';
import { NewCenterComponent } from './Pages/new-center/new-center.component';
import { NewPersonComponent } from './Pages/new-person/new-person.component';
import { ManagementPersonsComponent } from './Pages/management-persons/management-persons.component';



@NgModule({
  declarations: [
    MyCenterComponent,
    FindCentersComponent,
    NewCenterComponent,
    NewPersonComponent,
    ManagementPersonsComponent
  ],
  imports: [
    CommonModule,
    AdministratorRoutingModule
  ]
})
export class AdministratorFunctionsModule { }
