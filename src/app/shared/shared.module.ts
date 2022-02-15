import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ScrollToUpComponent } from './components/scroll-to-up/scroll-to-up.component';



@NgModule({
  declarations: [
    NavbarComponent,
    LoadingComponent,
    ScrollToUpComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    LoadingComponent,
    ScrollToUpComponent
  ]
})
export class SharedModule { }
