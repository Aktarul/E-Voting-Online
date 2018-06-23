import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-canvassing-report',
  templateUrl: './canvassing-report.component.html',
  styleUrls: ['./canvassing-report.component.css']
})
export class CanvassingReportComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
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
