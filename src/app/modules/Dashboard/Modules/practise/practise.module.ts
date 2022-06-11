import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PractiseRoutingModule } from './practise-routing.module';
import { ViewPractiseComponent } from './Pages/view-practise/view-practise.component';
import { SharedModule } from '../../../../shared/shared.module';



@NgModule({
  declarations: [
    ViewPractiseComponent
  ],
  imports: [
    CommonModule,
    PractiseRoutingModule,
    SharedModule
  ]
})
export class PractiseModule { }
