import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  formTitle: String;
  loginForm: FormGroup;


  username = new FormControl('',[Validators.required]);
  password = new FormControl('',[Validators.required]);

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: this.username,
      password: this.password
    })
  }

  getUser(formData: FormGroup){

  }

}
