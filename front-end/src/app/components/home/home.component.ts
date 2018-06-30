import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {VoterService} from "../../services/voter.service";
import {Voter} from "../../models/voter";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: Array<any> = [];
  id: any;

  voter = new Voter();


  constructor(
    private router: Router,
    public authService: AuthService,
    protected voterService: VoterService
  ) {
    this.items = [
      { name: '../assets/images/501.jpg' },
      { name: '../assets/images/502.jpg' },
      { name: '../assets/images/503.jpg' },
      // { name: '../assets/images/504.png' },
      // { name: '../assets/images/505.png' },
    ]
  }

  ngOnInit() {
    if(localStorage.getItem('is_member_visited') == "true"){
      localStorage.setItem('member_vote','true');
    }

    if(true){
      this.id = localStorage.getItem('loginId');
      this.voterService.getSingleVoter(this.id)
        .subscribe(res=>{
          this.voter = res.data;
          console.log(this.voter.status);
        });
    }

  }

  logOut() {

    this.authService.logout();

    // this.flashMessage.show('Your are successfully logged out!', {cssClass: 'alert-success'});

    this.router.navigate(['/login']);
    return false;
  }

  loginPage() {
    this.router.navigate(['login']);
  }

  adminPage() {
    this.router.navigate(['admin']);
  }

}
