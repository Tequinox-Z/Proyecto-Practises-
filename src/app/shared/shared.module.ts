import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './Components/Loading/loading.component';
import { ScrollToUpComponent } from './Components/Scroll-to-up/scroll-to-up.component';
import { SearchComponent } from './Components/Search/search.component';
import { LoadingComponentComponent } from './Components/loading-component/loading-component.component';
import { MenuComponent } from './Components/menu/menu.component';
import { MapButtonComponent } from './Components/map-button/map-button.component';
import { NextComponent } from './Components/next/next.component';
import { BackComponent } from './Components/back/back.component';
import { FileUploadComponent } from './Components/file-upload/file-upload.component';
import { FileUploadService } from './Services/FileUpload/file-upload.service';

@NgModule({
  declarations: [
    LoadingComponent,
    ScrollToUpComponent,
    SearchComponent,
    LoadingComponentComponent,
    MenuComponent,
    MapButtonComponent,
    NextComponent,
    BackComponent,
    FileUploadComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingComponent,
    ScrollToUpComponent,
    SearchComponent,
    LoadingComponentComponent,
    MenuComponent,
    MapButtonComponent,
    NextComponent,
    BackComponent,
    FileUploadComponent
  ]
})
export class SharedModule { }
