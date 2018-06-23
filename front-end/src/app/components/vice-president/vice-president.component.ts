import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {CandidateService} from "../../services/candidate.service";
import {Candidate} from "../../models/candidate";
import {Router} from "@angular/router";

@Component({
  selector: 'app-vice-president',
  templateUrl: './vice-president.component.html',
  styleUrls: ['./vice-president.component.css']
})
export class VicePresidentComponent implements OnInit {

  searchKey: String;
  candidates: Array<Candidate> = new Array<Candidate>();

  constructor(
    public authService: AuthService,
    private candidateService: CandidateService,
    private router: Router
  ) { }

  ngOnInit() {    this.searchKey = "Vice President";
    console.log('At search = '+ this.searchKey);
    this.candidateService.getSearchCandidate(this.searchKey)
      .subscribe(res => {
        this.candidates = res.data;
        console.log(this.candidates);
      });
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
