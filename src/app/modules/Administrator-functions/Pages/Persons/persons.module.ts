import { ManagementPersonsComponent } from './Pages/management-persons/management-persons.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonsRoutingModule } from './persons-routing-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewPersonComponent } from './Pages/new-person/new-person.component';
import { MatTableModule } from '@angular/material/table';
import { DataTablesModule } from 'angular-datatables';



@NgModule({
  declarations: [ManagementPersonsComponent, NewPersonComponent],
  imports: [
    CommonModule,
    PersonsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ]
})
export class PersonsModule { }
