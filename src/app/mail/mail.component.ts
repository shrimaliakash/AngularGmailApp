import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from  '@angular/forms';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

	constructor( private router: Router, private formBuilder: FormBuilder ) { }

	composeForm: FormGroup;
	isSubmitted  =  false;
	to = '';
	subject = '';
	body = '';
	ngOnInit() {
		this.composeForm  =  new FormGroup({
			to:  new FormControl(''),
			subject:  new FormControl(''),
			body:  new FormControl('')
		});
	}

}
