import { Component } from '@angular/core';
import { MyService } from './service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
  providers: []
})
export class AppComponent {
  title = 'app';
  constructor(
    private myserv: MyService
  ){
    setInterval(function(){
      console.log(myserv.value);
    }, 2000)
  
  }
}
