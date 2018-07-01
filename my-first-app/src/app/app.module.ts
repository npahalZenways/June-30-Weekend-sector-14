import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Custom } from "./custom";
@NgModule({
  declarations: [
    AppComponent,
    Custom
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [Custom]
})
export class AppModule { }
