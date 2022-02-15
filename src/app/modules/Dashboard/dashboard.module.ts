import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './Page/dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }

];

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }