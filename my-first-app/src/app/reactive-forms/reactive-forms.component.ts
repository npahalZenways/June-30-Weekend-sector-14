import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styles: []
})
export class ReactiveFormsComponent implements OnInit {

  // myForm = new FormGroup({

  //   name: new FormControl('', [Validators.required, Validators.minLength(5)]),
  //   email : new FormControl('', [Validators.required])
  // })

  myForm;
  constructor(
    private fb: FormBuilder
  ) { }

  onSubmit(formValue){
    console.log('form submitted', formValue)
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      address: this.fb.group({
        house: [],
        state: ['Delhi'],
        pincode: []
      })
    })
  }

}
