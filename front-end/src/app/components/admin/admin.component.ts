import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  formTitle: String;
  loginForm: FormGroup;

  email: String;
  password: String;
  published = false;


  // username = new FormControl('', [Validators.required]);
  // password = new FormControl('', [Validators.required]);

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    if(localStorage.getItem('is_member_visited') == "true"){
      localStorage.setItem('member_vote','true');
    }

    this.loginForm = this.formBuilder.group({
      // username: this.username,
      // password: this.password
    });
  }

  onLoginSubmit() {

    const user = {
      email: this.email,
      password: this.password
    };
    console.log(user);

    this.authService.authenticateAdmin(user).subscribe(res =>{

      console.log(user);

      if (res.success) {
        // console.log(res.data.isAdmin);
        localStorage.setItem('isAdmin',res.data.isAdmin);
        localStorage.setItem('loginId',res.data._id);
        localStorage.setItem('status',res.data.status);
        console.log(res.data);

        // if(res.data.isPublished){
        //   localStorage.setItem('published', 'true');
        // }


        this.authService.storeUserDatta(res.token, res.data);
        // this._flashMessagesService.show('You are now Logged In!', { cssClass: 'alert-success' } );
        this.router.navigate(['/home']);
      } else {
        // this._flashMessagesService.show('Email or Password do not match', { cssClass: 'alert-danger' } );
        this.router.navigate(['/admin']);
      }
    });

  }

  loginPage() {
    this.router.navigate(['login']);
  }

  adminPage() {
    this.router.navigate(['admin']);
  }



}
