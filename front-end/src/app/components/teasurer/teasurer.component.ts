import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Candidate} from "../../models/candidate";
import {AuthService} from "../../services/auth.service";
import {CandidateService} from "../../services/candidate.service";
import {Voter} from "../../models/voter";
import {VoterService} from "../../services/voter.service";

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

  voter = new Voter();

  id: any = null;

  constructor(
    public authService: AuthService,
    private candidateService: CandidateService,
    private router: Router,
    private voterService: VoterService
  ) { }

  ngOnInit() {
    if(localStorage.getItem('is_member_visited') == "true"){
      localStorage.setItem('member_vote','true');
    }

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
          localStorage.setItem('treasurer_vote','true');
          this.ngOnInit();

          this.router.navigate(['member']);
        })
    }
  }

}
