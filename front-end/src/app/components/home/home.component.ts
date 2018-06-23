import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    public authService: AuthService
  ) { }

  ngOnInit() {
    localStorage.setItem('president_vote','false');
    localStorage.setItem('vice_president_vote','false');
    localStorage.setItem('general_secretary_vote','false');
    localStorage.setItem('joint_secretary_vote','false');
    localStorage.setItem('member_vote','false');
    localStorage.setItem('treasurer_vote','false');

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
