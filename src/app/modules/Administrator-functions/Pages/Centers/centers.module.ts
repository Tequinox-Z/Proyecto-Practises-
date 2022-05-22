import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CentersRoutingModule } from './centers-routing-module';
import { MyCenterComponent } from './Pages/my-center/my-center.component';
import { FindCentersComponent } from './Pages/find-centers/find-centers.component';
import { NewCenterComponent } from './Pages/new-center/new-center.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MyCenterComponent, FindCentersComponent, NewCenterComponent],
  imports: [
    CommonModule,
    CentersRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CentersModule { }
