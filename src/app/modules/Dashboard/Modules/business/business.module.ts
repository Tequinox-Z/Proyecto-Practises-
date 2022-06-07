import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBusinessComponent } from './Pages/search-business/search-business.component';
import { BusinessRoutingModule } from './business-routing.module';
import { SharedModule } from '../../../../shared/shared.module';



@NgModule({
  declarations: [
    SearchBusinessComponent
  ],
  imports: [
    CommonModule,
    BusinessRoutingModule,
    SharedModule
  ]
})
export class BusinessModule { }
