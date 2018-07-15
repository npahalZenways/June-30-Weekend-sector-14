import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private ar: ActivatedRoute,
    private http:HttpClient
  ) { }

  onSubmit(form){
    this.http.post<any>('https://piet-login-app.herokuapp.com/user/login',{
      email: form.email,
      password: form.name
    }).subscribe(res=>{
      if(res.success){
        window.alert(res.msg);
        this.router.navigate(['/dashboard'])
      } else{
        window.alert(res.msg)
      }
    })
  }

  ngOnInit() {
    console.log(this.ar)
  }

}
