import { CannotContainSpaceValidators } from './cannotcontainspacevalidator';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { PasswordValidators } from "./PasswordValidators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactive forms';
  myGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.myGroup = this.formBuilder.group({
      
      'firstname': this.formBuilder.control('', [
          Validators.required, 
          CannotContainSpaceValidators.cannotContainSpace
      ]),
      'password': this.formBuilder.control('', Validators.required),

      'passwordConfirmation': this.formBuilder.control('', [
          Validators.required,
          PasswordValidators.matchPassword
      ])

    });
  }

  get firstname() {
    return this.myGroup.get('firstname');
  }

  get password() {
    return this.myGroup.get('password');
  }

  get passwordConfirmation() {
    return this.myGroup.get('passwordConfirmation');
  }

  /**
   * Handle the form submission
   */
  handleSubmit() {
    console.dir(this.myGroup);
  }

}
