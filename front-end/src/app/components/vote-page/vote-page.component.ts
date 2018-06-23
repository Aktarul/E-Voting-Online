import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {CandidateService} from "../../services/candidate.service";
import {Candidate} from "../../models/candidate";
import {Router} from "@angular/router";

@Component({
  selector: 'app-vote-page',
  templateUrl: './vote-page.component.html',
  styleUrls: ['./vote-page.component.css']
})
export class VotePageComponent implements OnInit {

  vote_local = false;
  vote_status = false;
  searchKey: String;
  candidates: Array<Candidate> = new Array<Candidate>();

  constructor(
    public authService: AuthService,
    private candidateService: CandidateService,
    private router: Router
  ) { }

  ngOnInit() {
    // localStorage.setItem('president_vote','false');
    // let vote_temp2 = localStorage.getItem('president_vote');
    // this.vote_local = (vote_temp2 == "true");

    let vote_temp = localStorage.getItem('status');
    this.vote_status = (vote_temp == "true");

    this.searchKey = "President";
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

  vote_add(candidate) {
    console.log(candidate);
    this.candidateService.updateVote(candidate._id)
      .subscribe(res=>{
        console.log(res.data);
        // this.router.navigate([`photo-upload-candidate/${res.data._id}`]);
      })
  }

}
