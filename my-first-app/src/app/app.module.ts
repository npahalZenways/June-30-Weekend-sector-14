import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Custom } from "./custom";
import { DataBinding } from './data-binding/data-binding';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InBuiltDirectivesComponent } from './in-built-directives/in-built-directives.component';
import { OneComponent } from './data-sharing/one/one.component';
import { TwoComponent } from './data-sharing/two/two.component';
import { MyService } from './service';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    Custom,
    DataBinding,
    InBuiltDirectivesComponent,
    OneComponent,
    TwoComponent,
    FormsComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
