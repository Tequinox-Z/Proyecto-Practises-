import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './Page/welcome/welcome.component';


const router: Routes = [
  {
    path: '',
    component: WelcomeComponent
  }
]


@NgModule({
  imports: [RouterModule.forChild(router)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { 
  
}
