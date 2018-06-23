import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Candidate} from "../../models/candidate";
import {AuthService} from "../../services/auth.service";
import {CandidateService} from "../../services/candidate.service";

@Component({
  selector: 'app-teasurer',
  templateUrl: './teasurer.component.html',
  styleUrls: ['./teasurer.component.css']
})
export class TeasurerComponent implements OnInit {
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
    let vote_temp2 = localStorage.getItem('treasurer_vote');
    this.vote_local = (vote_temp2 == "true");

    let vote_temp = localStorage.getItem('status');
    this.vote_status = (vote_temp == "true");

    this.searchKey = "Treasurer";
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
    var r = confirm('Are you sure? You can not change the vote!');
    if(r == true){
      // console.log(candidate);
      this.candidateService.updateVote(candidate._id)
        .subscribe(res=>{
          console.log(res.data);
          localStorage.setItem('treasurer_vote','true');
          this.ngOnInit();

          this.router.navigate(['member']);
        })
    }
  }

}
