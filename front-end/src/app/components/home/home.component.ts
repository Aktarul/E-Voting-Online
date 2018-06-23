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

  id: any;

  voter = new Voter();

  constructor(
    private router: Router,
    public authService: AuthService,
    protected voterService: VoterService
  ) { }

  ngOnInit() {
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
}
