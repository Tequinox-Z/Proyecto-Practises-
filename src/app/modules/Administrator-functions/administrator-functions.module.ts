import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministratorRoutingModule } from './administrator-functions-routing-module';
import { CentersModule } from './Pages/Centers/centers.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdministratorRoutingModule,
    CentersModule
  ]
})
export class AdministratorFunctionsModule { }
