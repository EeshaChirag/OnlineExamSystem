import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MustMatch} from '../MustMatch';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerform:FormGroup;
  submitted = false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.registerform = this.formBuilder.group({
      FullName:['', Validators.required],
      Email:['', [Validators.required, Validators.email]],
      Password:['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      MobileNumber:['',[Validators.required,Validators.pattern(/^((\\+91-?)|0)?[0-9]{10}$/)]],
      dob:['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      City:['', Validators.required],
      State:['', Validators.required],
      Qualification:['', Validators.required],
      yoc:['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
   },{
     validator:MustMatch('Password','confirmPassword')
   });
  }

  get f(){return this.registerform.controls;}

  onSubmit(){
    this.submitted = true;

    if(this.registerform.invalid)
    {
      return;
    }

    alert ('Successfully registered!!');
  }
}
