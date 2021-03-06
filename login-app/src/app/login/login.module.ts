import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SignUpComponent } from './sign-up.component';
import { RouterModule } from '../../../node_modules/@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([{
      path: '',
      component: LoginComponent
    },{
      path: 'signup',
      component: SignUpComponent
    }])
  ],
  declarations: [
    LoginComponent,
    SignUpComponent
  ]
})
export class LoginModule { }
