import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from "../../services/auth.service";
import {CandidateService} from "../../services/candidate.service";
import {AdminComponent} from "../admin/admin.component";
import {AdminService} from "../../services/admin.service";

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
    private authService: AuthService,
    private candidateService: CandidateService,
    private adminService: AdminService
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
        // get members
        // let searchKey = "Member";
        // // console.log('At search = '+ this.searchKey);
        // this.candidateService.getSearchCandidate(searchKey)
        //   .subscribe(res => {
        //     localStorage.setItem('members',res.data);
        //     // console.log(this.candidates);
        //   });

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

      this.adminService.getSingleAdmin()
        .subscribe(res => {
          console.log(res.data);
          if(res.data.isPublished == true){
            localStorage.setItem('published','true');
          } else {
            localStorage.setItem('published','false');
          }
        });

    });

  }

  adminPage(){
    this.router.navigate(['admin']);
  }


}
