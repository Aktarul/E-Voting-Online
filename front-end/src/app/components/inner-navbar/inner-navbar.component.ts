import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-inner-navbar',
  templateUrl: './inner-navbar.component.html',
  styleUrls: ['./inner-navbar.component.css']
})
export class InnerNavbarComponent implements OnInit {

  public isAdmin = 0;

  constructor(
    public authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
    if(localStorage.getItem('isAdmin') == 'true'){
      this.isAdmin = 1;
      console.log(this.isAdmin);
    }

    console.log(this.authService.isAdmin())
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
