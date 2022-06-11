import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DegreesComponent } from './Pages/degrees/degrees.component';
import { ViewDegreeComponent } from './Pages/view-degree/view-degree.component';
import { DegreeBusinessComponent } from './Pages/degree-business/degree-business.component';
import { DegreeTeacherComponent } from './Pages/degree-teacher/degree-teacher.component';
import { DegreeStudentComponent } from './Pages/degree-student/degree-student.component';


const routes: Routes = [
    {
      path: "",
      component: DegreesComponent
    },
    {
      path: "view/:idDegree",
      component: ViewDegreeComponent
    },
    {
      path: "view/:idDegree/business",
      component: DegreeBusinessComponent
    },
    {
      path: "view/:idDegree/teacher",
      component: DegreeTeacherComponent
    },
    {
      path: "view/:idDegree/student",
      component: DegreeStudentComponent
    }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DegreeRoutingModule { }
