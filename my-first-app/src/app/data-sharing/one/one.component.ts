import { Component, OnInit } from '@angular/core';
import { MyService } from '../../service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styles: [],
  // providers: [MyService]
  viewProviders: [MyService]
})
export class OneComponent implements OnInit {

  myprop = "Nitin";

  outputR(e){
    console.log('output received', e);
  }
  constructor(
    private myserv: MyService
  ) { 
    setInterval(function(){
      console.log(myserv.value);
    }, 2000)
  }

  ngOnInit() {
  }

}
