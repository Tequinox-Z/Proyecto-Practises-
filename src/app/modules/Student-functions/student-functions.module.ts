import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-functions-routing-module';
import { MyMatriculesComponent } from './Pages/Enrollments/Pages/My-matricules/my-matricules.component';



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
