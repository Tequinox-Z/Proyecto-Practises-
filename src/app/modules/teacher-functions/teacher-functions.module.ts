import { TeacherRoutingModule } from './teacher-functions-routing-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewDegreesComponent } from './Pages/view-degrees/view-degrees.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ],
  bootstrap: [ViewDegreesComponent]
})
export class TeacherFunctionsModule { }
