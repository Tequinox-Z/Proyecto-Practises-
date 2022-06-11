import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr';
import { KeyboardService } from './shared/Services/Keyboard-service/keyboard-service';
import { SoundService } from './core/Services/SoundFx/sound.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,  
    ToastrModule.forRoot({
      progressBar: true,
      timeOut: 5000,
      closeButton: true,
      progressAnimation: "decreasing"
    }),
    BrowserAnimationsModule
  ],
  providers: [
    KeyboardService, SoundService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
