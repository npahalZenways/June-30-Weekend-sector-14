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
import { ApiIntegrationComponent } from './api-integration/api-integration.component';
import { HttpClientModule } from "@angular/common/http";
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipe } from "./pipes/custom-pipe";
import { DirectivesComponent } from './directives/directives.component';
import { MyDirective } from "./directives/my-directive";

@NgModule({
  declarations: [
    AppComponent,
    Custom,
    DataBinding,
    InBuiltDirectivesComponent,
    OneComponent,
    TwoComponent,
    FormsComponent,
    ReactiveFormsComponent,
    ApiIntegrationComponent,
    PipesComponent,
    CustomPipe,
    DirectivesComponent,
    MyDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    MyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
