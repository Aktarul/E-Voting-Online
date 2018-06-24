import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formTitle: String;
  loginForm: FormGroup;

  email: String;
  password: String;


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

    this.authService.authenticateUser(user).subscribe(res =>{

       console.log(user);

      if (res.success) {
        // console.log(res.data.isAdmin);
        localStorage.setItem('isAdmin',res.data.isAdmin);
        localStorage.setItem('loginId',res.data._id);
        localStorage.setItem('status',res.data.status);
        localStorage.setItem('president_vote','false');
        localStorage.setItem('vice_president_vote','false');
        localStorage.setItem('general_secretary_vote','false');
        localStorage.setItem('joint_secretary_vote','false');
        localStorage.setItem('member_vote','false');
        localStorage.setItem('treasurer_vote','false');
        localStorage.setItem('rem_member_vote','10');
        localStorage.setItem('is_member_visited','false');

        this.authService.storeUserDatta(res.token, res.data);
        // this._flashMessagesService.show('You are now Logged In!', { cssClass: 'alert-success' } );
        this.router.navigate(['/home']);
      } else {
        // this._flashMessagesService.show('Email or Password do not match', { cssClass: 'alert-danger' } );
        this.router.navigate(['/login']);
      }
    });

  }

  adminPage(){
    this.router.navigate(['admin']);
  }


}
