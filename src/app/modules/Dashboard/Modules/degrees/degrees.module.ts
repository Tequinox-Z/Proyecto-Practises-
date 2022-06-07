import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DegreesComponent } from './Pages/degrees/degrees.component';
import { DegreeRoutingModule } from './degrees-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { ViewDegreeComponent } from './Pages/view-degree/view-degree.component';
import { DegreeBusinessComponent } from './Pages/degree-business/degree-business.component';
import { DegreeStudentComponent } from './Pages/degree-student/degree-student.component';
import { DegreeTeacherComponent } from './Pages/degree-teacher/degree-teacher.component';



@NgModule({
  declarations: [
    DegreesComponent,
    ViewDegreeComponent,
    DegreeBusinessComponent,
    DegreeStudentComponent,
    DegreeTeacherComponent
  ],
  imports: [
    CommonModule,
    DegreeRoutingModule,
    SharedModule
  ]
})
export class DegreesModule { }
