import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Candidate} from "../../models/candidate";
import {AuthService} from "../../services/auth.service";
import {CandidateService} from "../../services/candidate.service";

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  searchKey: String;
  candidates: Array<Candidate> = new Array<Candidate>();

  constructor(
    public authService: AuthService,
    private candidateService: CandidateService,
    private router: Router
  ) { }

  ngOnInit() {
    this.searchKey = "Member";
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
