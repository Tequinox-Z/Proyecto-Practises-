import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBusinessComponent } from './Pages/search-business/search-business.component';
import { BusinessRoutingModule } from './business-routing.module';



@NgModule({
  declarations: [
    SearchBusinessComponent
  ],
  imports: [
    CommonModule,
    BusinessRoutingModule
  ]
})
export class BusinessModule { }
