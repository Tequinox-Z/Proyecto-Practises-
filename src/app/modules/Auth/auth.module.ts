import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './Pages/Login/login.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { RestartPasswordComponent } from './Pages/restart-password/restart-password.component';

@NgModule({
  declarations: [
    LoginComponent, 
    RestartPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    SharedModule,
    RouterModule
  ]
})
export class AuthModule { }
