import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Custom } from "./custom";
import { DataBinding } from './data-binding/data-binding';
import { FormsModule } from "@angular/forms";
import { InBuiltDirectivesComponent } from './in-built-directives/in-built-directives.component';
import { OneComponent } from './data-sharing/one/one.component';
import { TwoComponent } from './data-sharing/two/two.component';

@NgModule({
  declarations: [
    AppComponent,
    Custom,
    DataBinding,
    InBuiltDirectivesComponent,
    OneComponent,
    TwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
