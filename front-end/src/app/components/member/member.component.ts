import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Candidate} from "../../models/candidate";
import {AuthService} from "../../services/auth.service";
import {CandidateService} from "../../services/candidate.service";
import {VoterService} from "../../services/voter.service";
import {Voter} from "../../models/voter";

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  vote_local = false;
  vote_status = false;
  rem_vote: number;
  message = " ";
  published: any = false;

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
    if(localStorage.getItem('published') == "true"){
    this.published = true;
  }

    localStorage.setItem('is_member_visited','true');

    let vote_temp2 = localStorage.getItem('member_vote');
    this.vote_local = (vote_temp2 == "true");

    let vote_temp = localStorage.getItem('status');
    this.vote_status = (vote_temp == "true");

    this.searchKey = "Member";
    // console.log('At search = '+ this.searchKey);
    this.candidateService.getSearchCandidate(this.searchKey)
      .subscribe(res => {
        this.candidates = res.data;
        // console.log(this.candidates);
      });

    // this.candidates = localStorage.getItem('members');
    //
    // let candid: any;
    // candid = localStorage.getItem('members');
    // console.log(candid);

    this.rem_vote = parseInt(localStorage.getItem('rem_member_vote'));


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


  vote_add(candidate) {
    var r = confirm('Are you sure? You can not change the vote!');
    if(r == true){
      // console.log(candidate);
      this.candidateService.updateVote(candidate._id)
        .subscribe(res =>{
          // console.log(res.data);

          // view delete same category candidates one by one
          console.log(candidate);
          let len = this.candidates.length;
          let len2 = len;
          for(var i = 0 ; i < len2 ; i++){
            for(var j = 0 ; j < len ; j ++ ) {
              // console.log(i +" " + j);
              if(candidate.dept == this.candidates[j].dept) {
                this.candidates.splice(this.candidates.indexOf(this.candidates[j]), 1);
                len--;

                if(this.candidates.length == 0){
                  this.message = "No candidates left to vote! " +
                    "Please submit your votes clicking on submit vote button below.";
                }
              }
            }
          }


          // updating remaining vote
          this.rem_vote = parseInt(localStorage.getItem('rem_member_vote'));
          this.rem_vote = this.rem_vote - 1;
          localStorage.setItem('rem_member_vote', this.rem_vote.toString());
          // console.log('remaining vote:' + this.rem_vote);

          // if remaining vote finished then member_vote will be true
          if(!this.rem_vote) {
            localStorage.setItem('member_vote','true');
            this.ngOnInit();
            this.router.navigate(['home']);
          }
        })
    }

  }

  viewCandidate(candidate){
    this.router.navigate([`view-candidate3/${candidate._id}`]);
  }

  vote_submit() {
    localStorage.setItem('member_vote','true');
    this.ngOnInit();
    this.router.navigate(['home']);
  }

}
