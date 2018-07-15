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
  
  }
}
