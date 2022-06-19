import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DegreesComponent } from './Pages/degrees/degrees.component';
import { ViewDegreeComponent } from './Pages/view-degree/view-degree.component';
import { DegreeBusinessComponent } from './Pages/degree-business/degree-business.component';
import { DegreeTeacherComponent } from './Pages/degree-teacher/degree-teacher.component';
import { DegreeStudentComponent } from './Pages/degree-student/degree-student.component';
import { MyDegrees } from './Pages/myDegrees/my-degrees.component';


// Rutas de ciclos

const routes: Routes = [
    {
      path: "",
      redirectTo: "all"
    },
    {
      path: "all",
      component: DegreesComponent
    },
    {
      path: "my-degrees",
      component: MyDegrees
    },
    {
      path: "my-degrees/view/:idDegree",
      component: ViewDegreeComponent
    },
    {
      path: "all/view/:idDegree",
      component: ViewDegreeComponent
    },
    {
      path: "my-degrees/view/:idDegree/business",
      component: DegreeBusinessComponent
    },
    {
      path: "my-degrees/view/:idDegree/teacher",
      component: DegreeTeacherComponent
    },
    {
      path: "all/view/:idDegree/business",
      component: DegreeBusinessComponent
    },
    {
      path: "all/view/:idDegree/teacher",
      component: DegreeTeacherComponent
    },
    {
      path: "my-degrees/view/:idDegree/student",
      component: DegreeStudentComponent
    },
    {
      path: "all/view/:idDegree/student",
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
