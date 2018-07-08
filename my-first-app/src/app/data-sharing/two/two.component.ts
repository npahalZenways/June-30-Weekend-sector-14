import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styles: [],
  inputs: ['myinput'],
  outputs: ['myoutput']
})
export class TwoComponent implements OnInit {

  myinput = 'hello';

  // custom event
  myoutput = new EventEmitter();

  sendsignal(){
    this.myoutput.emit('hello')
  }

  constructor() { }

  ngOnInit() {
  }

}
