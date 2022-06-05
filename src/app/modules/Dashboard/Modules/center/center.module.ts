import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CenterRoutingModule } from './center-routing.module';
import { MyCenterComponent } from './Pages/my-center/my-center.component';
import { SearchCenterComponent } from './Pages/search-center/search-center.component';
import { SharedModule } from '../../../../shared/shared.module';
import { NewCenterComponent } from './Pages/new-center/new-center.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SearchCenterComponent,
    MyCenterComponent,
    NewCenterComponent
  ],
  imports: [
    CommonModule,
    CenterRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CenterModule { }
