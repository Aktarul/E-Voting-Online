import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {CandidateService} from "../../services/candidate.service";
import {Candidate} from "../../models/candidate";
import {Router} from "@angular/router";
import {Voter} from "../../models/voter";
import {VoterService} from "../../services/voter.service";

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
  temp_candidates: Array<Candidate> = new Array<Candidate>();

  voter = new Voter();

  id: any = null;
  published:any = false;

  constructor(
    public authService: AuthService,
    private candidateService: CandidateService,
    private router: Router,
    private voterService: VoterService
  ) { }

  ngOnInit() {
    if(localStorage.getItem('published') == "true"){
      this.published = true;
    }
    if(localStorage.getItem('is_member_visited') == "true"){
      localStorage.setItem('member_vote','true');
    }

    // localStorage.setItem('president_vote','false');
    let vote_temp2 = localStorage.getItem('president_vote');
    this.vote_local = (vote_temp2 == "true");

    let vote_temp = localStorage.getItem('status');
    this.vote_status = (vote_temp == "true");

    this.searchKey = "President";
    console.log('At search = '+ this.searchKey);
    this.candidateService.getSearchCandidate(this.searchKey)
      .subscribe(res => {

        let j = 0;
        for(let i = 0; i < res.data.length; i++){
          if(res.data[i].position == "President"){
            this.temp_candidates[j] = res.data[i];
            j++;
          }
        }
        this.candidates = this.temp_candidates;
        console.log(this.temp_candidates);
        // console.log(this.candidates);
      });

    // changing status starts
    if(true){
      this.id = localStorage.getItem('loginId');
      this.voterService.getSingleVoter(this.id)
        .subscribe(res=>{
          this.voter = res.data;
          console.log(this.voter);
        });
    }


    if(localStorage.getItem('member_vote') == "true" &&
      localStorage.getItem('president_vote') == "true" &&
      localStorage.getItem('vice_president_vote') == "true" &&
      localStorage.getItem('general_secretary_vote') == "true" &&
      localStorage.getItem('joint_secretary_vote') == "true" &&
      localStorage.getItem('treasurer_vote') == "true" ) {

      console.log('hello true');
      localStorage.setItem('status','true');

      this.voter.status = true;

      this.voterService.updateStatus(this.voter)
        .subscribe(res=>{
          console.log(res)

          // this.router.navigate([`photo-upload-candidate/${res.data._id}`]);
        })
    }
    // changing status ends

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


  viewCandidate(candidate){
    this.router.navigate([`view-candidate2/${candidate._id}`]);
  }

  vote_add(candidate) {
    var r = confirm('Are you sure? You can not change the vote!');
    if(r == true){
      // console.log(candidate);
      this.candidateService.updateVote(candidate._id)
        .subscribe(res=>{
          console.log(res.data);
          localStorage.setItem('president_vote','true');
          this.ngOnInit();

          this.router.navigate(['vice-president']);
        })
    }
  }

}
