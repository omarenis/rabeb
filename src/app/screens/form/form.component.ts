import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formGroup !: FormGroup;
  hide !: boolean;
  constructor() { }

  ngOnInit(): void {
    this.hide = true;
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      school: new FormControl('', [Validators.required]),
      birthdate: new FormControl('', [Validators.required]),
      parentFullName: new FormControl('', [Validators.required]),
      cin: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      zipCode: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required])
    });
  }
  changeVisibility(): void{
    this.hide = !this.hide;
  }
}
