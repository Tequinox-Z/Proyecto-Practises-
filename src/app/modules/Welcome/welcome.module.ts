import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './Page/Welcome/welcome.component';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    SharedModule
  ]
})
export class WelcomeModule { }
