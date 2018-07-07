import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Custom } from "./custom";
import { DataBinding } from './data-binding/data-binding';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    Custom,
    DataBinding
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
