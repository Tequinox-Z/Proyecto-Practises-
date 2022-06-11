import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CenterRoutingModule } from './center-routing.module';
import { MyCenterComponent } from './Pages/my-center/my-center.component';
import { SearchCenterComponent } from './Pages/search-center/search-center.component';
import { SharedModule } from '../../../../shared/shared.module';
import { NewCenterComponent } from './Pages/new-center/new-center.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UnusualMovementsComponent } from './Pages/unusual-movements/unusual-movements.component';
import { TemperatureHumidityComponent } from './Pages/temperature-humidity/temperature-humidity.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    SearchCenterComponent,
    MyCenterComponent,
    NewCenterComponent,
    UnusualMovementsComponent,
    TemperatureHumidityComponent
  ],
  imports: [
    CommonModule,
    CenterRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    NgChartsModule
  ]
})
export class CenterModule { }
