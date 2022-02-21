import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-functions-routing-module';
import { MyMatriculesComponent } from './Pages/my-matricules/my-matricules.component';



@NgModule({
  declarations: [
    MyMatriculesComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentFunctionsModule { }
