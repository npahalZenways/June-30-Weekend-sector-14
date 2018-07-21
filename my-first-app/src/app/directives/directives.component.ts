import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styles: []
})
export class DirectivesComponent implements OnInit {

  input = "my input"

  constructor() { }

  print(){
    console.log('output received')
  }

  ngOnInit() {
  }

}
