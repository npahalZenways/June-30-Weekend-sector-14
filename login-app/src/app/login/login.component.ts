import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get<any>(
      'https://piet-login-app.herokuapp.com/user/getdata', {
        headers: {
          'x-access-token': sessionStorage.token
        }
      }
      ).subscribe(res => {
        console.log(res)
      })
  }

}
