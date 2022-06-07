import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PractiseRoutingModule } from './practise-routing.module';
import { ViewPractiseComponent } from './Pages/view-practise/view-practise.component';



@NgModule({
  declarations: [
    ViewPractiseComponent
  ],
  imports: [
    CommonModule,
    PractiseRoutingModule
  ]
})
export class PractiseModule { }
