import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    },{
      path: 'dashboard',
      canActivate: [AuthGuard],
      loadChildren: './dashboard/dashboard.module#DashboardModule'
    },{
      path: 'login',
      loadChildren: './login/login.module#LoginModule'
    },{
      path: '**',
      loadChildren: './error/error.module#ErrorModule'
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
