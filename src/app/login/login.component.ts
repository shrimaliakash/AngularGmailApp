import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from  '@angular/forms';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder ) { }
	
	authForm: FormGroup;
	isSubmitted  =  false;
	createForm:FormGroup;
	first_name = '';
	last_name = '';
	email = '';
 	ngOnInit() {
		this.authForm  =  new FormGroup({
        	email:  new FormControl(''),
        	password:  new FormControl('')
	    });

	    this.createForm  =  new FormGroup({
			first_name:  new FormControl(''),
			last_name:  new FormControl(''),
			email:  new FormControl('')
		});
  	}

  	get formControls() { return this.authForm.controls; }

  	signIn(){
  		console.log(this.authForm);
	    this.isSubmitted = true;
	    if(this.authForm.invalid){
	      return;
	    } else {
			this.router.navigateByUrl('/mail');
	    }
	}

}