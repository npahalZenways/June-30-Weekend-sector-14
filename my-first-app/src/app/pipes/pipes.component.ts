import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: []
})
export class PipesComponent implements OnInit {

  today = new Date();

  mystr = "HELLO, This is a string";

  mynumber = 8575.93586;

  option;

  query;
  
  employees = [
    {
      name: 'Nitin',
      empId: 'ABC123'
    },
    {
      name: 'Amit',
      empId: 'AHG123'
    },
    {
      name: 'Shashank',
      empId: 'DSDC123'
    },
    {
      name: 'Gaurav',
      empId: 'ABHG123'
    },
    {
      name: 'Ravi',
      empId: 'ABCKJH123'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
