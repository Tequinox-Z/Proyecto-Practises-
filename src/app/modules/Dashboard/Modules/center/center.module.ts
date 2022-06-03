import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CenterRoutingModule } from './center-routing.module';
import { MyCenterComponent } from './Pages/my-center/my-center.component';
import { SearchCenterComponent } from './Pages/search-center/search-center.component';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [
    SearchCenterComponent,
    MyCenterComponent
  ],
  imports: [
    CommonModule,
    CenterRoutingModule,
    SharedModule
  ]
})
export class CenterModule { }
