import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-in-built-directives',
  templateUrl: './in-built-directives.component.html',
  styles: []
})
export class InBuiltDirectivesComponent implements OnInit {

  isTrue = false;

  myarr = [1,2,3,4,5];

  switchCondition = 'hello'

  constructor() { }

  ngOnInit() {
  }

}
