import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { LocalServiceService } from './local-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [LocalServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
