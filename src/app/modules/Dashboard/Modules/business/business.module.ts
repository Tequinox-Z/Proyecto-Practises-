import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBusinessComponent } from './Pages/search-business/search-business.component';
import { BusinessRoutingModule } from './business-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewBusinessComponent } from './Pages/new-business/new-business.component';
import { EditBusinessComponent } from './Pages/edit-business/edit-business.component';



@NgModule({
  declarations: [
    SearchBusinessComponent,
    NewBusinessComponent,
    EditBusinessComponent
  ],
  imports: [
    CommonModule,
    BusinessRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BusinessModule { }
