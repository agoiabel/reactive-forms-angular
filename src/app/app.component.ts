import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

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
      'firstname': this.formBuilder.control('', Validators.required),
      'password': this.formBuilder.control('', Validators.required)
    });
  }

  get firstname() {
    return this.myGroup.get('firstname');
  }

  get password() {
    return this.myGroup.get('password');
  }

  /**
   * Handle the form submission
   */
  handleSubmit() {
    console.dir(this.myGroup);
  }

}
