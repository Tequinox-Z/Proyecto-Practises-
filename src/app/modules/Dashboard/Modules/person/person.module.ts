import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonRoutingModule } from './person-routing.module';
import { EditPersonComponent } from './Pages/edit-person/edit-person.component';
import { DataTablesModule } from 'angular-datatables';
import { PersonManagementComponent } from './Pages/person-management/person-management.component';
import { SharedModule } from '../../../../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EditPersonComponent,
    PersonManagementComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    PersonRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PersonModule { }