import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './Components/Loading/loading.component';
import { ScrollToUpComponent } from './Components/Scroll-to-up/scroll-to-up.component';
import { SearchComponent } from './Components/Search/search.component';
import { LoadingComponentComponent } from './Components/loading-component/loading-component.component';

@NgModule({
  declarations: [
    LoadingComponent,
    ScrollToUpComponent,
    SearchComponent,
    LoadingComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingComponent,
    ScrollToUpComponent,
    SearchComponent,
    LoadingComponentComponent
  ]
})
export class SharedModule { }
