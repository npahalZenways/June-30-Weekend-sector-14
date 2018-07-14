import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styles: []
})
export class FormsComponent implements OnInit {

  user = {
    email: '',
    name: ''
  }

  @ViewChild('myForm') form;

  constructor() { }

  print(n){
    console.log(n.pristine)
  }

  onSubmit(value){
    this.form.reset()
  }
  ngOnInit() {
  }

}
