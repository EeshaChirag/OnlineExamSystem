import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Loginform:FormGroup;
  submitted = false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.Loginform = this.formBuilder.group({
      Email:['', [Validators.required, Validators.email]],
      Password:['', [Validators.required, Validators.minLength(6)]],
   },);
  }
  get f(){return this.Loginform.controls;}

  onSubmit(){
    this.submitted = true;

    if(this.Loginform.invalid)
    {
      return;
    }

  }}
