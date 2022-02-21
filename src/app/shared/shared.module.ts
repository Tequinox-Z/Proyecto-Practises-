import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { ScrollToUpComponent } from './components/scroll-to-up/scroll-to-up.component';
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [
    LoadingComponent,
    ScrollToUpComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingComponent,
    SearchComponent,
    ScrollToUpComponent
  ]
})
export class SharedModule { }
