import { NgModule } from '@angular/core';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';


const router: Routes = [
  {
    path: '',
    component: NotFoundComponent
  }
]


@NgModule({
  imports: [RouterModule.forChild(router)],
  exports: [RouterModule]
})
export class NotFoundRoutingModule { }
