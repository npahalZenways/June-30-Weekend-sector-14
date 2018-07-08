import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styles: []
})
export class OneComponent implements OnInit {

  myprop = "Nitin";

  outputR(e){
    console.log('output received', e);
  }
  constructor() { }

  ngOnInit() {
  }

}
