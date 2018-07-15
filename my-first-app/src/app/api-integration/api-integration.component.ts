import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, Subject, BehaviorSubject } from 'rxjs';
// import { Http } from "@angular/http";

@Component({
  selector: 'app-api-integration',
  templateUrl: './api-integration.component.html',
  styles: []
})
export class ApiIntegrationComponent implements OnInit {

  myobs = new Observable(function(observer) {
    observer.next('abc');
    observer.next('bye');
    observer.complete();
    observer.next('hello');
  })

  observerproperty;
  myobs2 = new Observable(observer => {
    this.observerproperty = observer;
  })

  mysubject = new Subject();

  mybehaviorsubject = new BehaviorSubject('any')

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.post('https://piet-login-app.herokuapp.com/user/login',
      {
        email: 'abc@test.com',
        password: 'abc@123'
      }
    ).subscribe(function(res){
      console.log(res)
    })

    this.mysubject.next()

    this.myobs2.subscribe(function(update){
      console.log(update)
    })

    this.mybehaviorsubject.next('hello');
    this.mybehaviorsubject.getValue()
  }

}
