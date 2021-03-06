import { Component, OnInit } from '@angular/core';
import {VoterService} from "../../services/voter.service";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {CandidateService} from "../../services/candidate.service";
import {Candidate} from "../../models/candidate";
import {AdminService} from "../../services/admin.service";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  published: any = false;
  not_published: any = true;
  candidates: Array<Candidate> = new Array<Candidate>();
  newCandidates: Array<Candidate> = new Array<Candidate>();
  temp_candidates: Array<Candidate> = new Array<Candidate>();
  result_candidates: Array<Candidate> = new Array<Candidate>();
  all_candidates: Array<Candidate> = new Array<Candidate>();

  tempCan = new Candidate();

  searchKey: any;

  constructor(
    private router: Router,
    public authService: AuthService,
    protected voterService: VoterService,
    private candidateService: CandidateService,
    private adminService: AdminService
  ) { }

  ngOnInit() {
    if(localStorage.getItem('published') == "true"){
      this.published = true;
    }

    if(localStorage.getItem('is_member_visited') == "true"){
    localStorage.setItem('member_vote','true');
  }

  this.president();

    this.adminService.getSingleAdmin()
      .subscribe(res => {
        console.log('admin: ');
        console.log(res.data.isPublished);

        if(res.data.isPublished) {
          this.not_published = false;
        }

      });

    // this.candidateService.getCandidate()
    //   .subscribe(res =>{
    //     this.candidates = res.data;
    //     console.log(this.candidates);
    //
    //     this.sort();
    //   });


    // if(true){
    //   this.president();
    //   this.vice_president();
    //   this.members();
    //   this.general_secretary();
    //   this.joint_secretary();
    //   this.treasurer();
    //   if(true){
    //     this.result_candidates = [];
    //     this.result_candidates = this.all_candidates;
    //     console.log( 'new candidates ' );
    //     console.log( this.all_candidates);
    //     console.log( this.result_candidates);
    //   }
    // }

    // this.result_candidates = this.all_candidates;

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


  sort() {
    var length = this.candidates.length;

    for(var i = 0; i < length - 1 ; i++ ){
      for(var j = 0; j < length - i - 1 ; j++) {
        // console.log(i + " " + j + " " + this.candidates2[i].total_vote + " " + this.candidates2[j].total_vote);
        if(this.candidates[j].total_vote < this.candidates[j+1].total_vote){
          this.tempCan = this.candidates[j];
          this.candidates[j] = this.candidates[j+1];
          this.candidates[j+1] = this.tempCan;
        }
      }
    }

    this.result_candidates = [];
    this.result_candidates[0] = this.candidates[0];
    //
    // if(this.candidates[0].position == "President") {
    //   this.result_candidates[0] = this.candidates[0];
    // }
    // if(this.candidates[0].position == "Vice President") {
    //   this.result_candidates[1] = this.candidates[0];
    // }
    // if(this.candidates[0].position == "Member") {
    //   this.result_candidates[2] = this.candidates[0];
    // }
    // if(this.candidates[0].position == "General Secretary") {
    //   this.result_candidates[3] = this.candidates[0];
    // }
    // if(this.candidates[0].position == "Joint Secretary") {
    //   this.result_candidates[4] = this.candidates[0];
    // }
    // if(this.candidates[0].position == "Treasurer") {
    //   this.result_candidates[5] = this.candidates[0];
    // }
  }

  president() {
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
        this.candidates = this.temp_candidates;   // only president except vice-president
        // console.log(this.temp_candidates);
        // console.log(this.candidates);

        // console.log(res.data);
        this.newCandidates = this.temp_candidates;
        this.sort();
        this.all_candidates[0] = this.candidates[0];
      });
  }

  vice_president() {
    this.searchKey = "Vice President";
    console.log('At search = '+ this.searchKey);
    this.candidateService.getSearchCandidate(this.searchKey)
      .subscribe(res => {
        // console.log(res.data);
        this.candidates = res.data;
        this.newCandidates = res.data;
        this.sort();
        this.all_candidates[1] = this.candidates[0];
      });
  }


  members() {
    this.searchKey = "Member";
    // console.log('At search = '+ this.searchKey);
    this.candidateService.getSearchCandidate(this.searchKey)
      .subscribe(res => {
        // console.log(res.data);
        this.candidates = res.data;
        this.newCandidates = res.data;
        this.sort();
        this.all_candidates[2] = this.candidates[0];
      });
  }


  general_secretary() {
    this.searchKey = "General Secretary";
    // console.log('At search = '+ this.searchKey);
    this.candidateService.getSearchCandidate(this.searchKey)
      .subscribe(res => {
        // console.log(res.data);
        this.candidates = res.data;
        this.newCandidates = res.data;
        this.sort();
        this.all_candidates[3] = this.candidates[0];
      });
  }


  joint_secretary() {
    this.searchKey = "Joint Secretary";
    // console.log('At search = '+ this.searchKey);
    this.candidateService.getSearchCandidate(this.searchKey)
      .subscribe(res => {
        // console.log(res.data);
        this.candidates = res.data;
        this.newCandidates = res.data;
        this.sort();
        this.all_candidates[4] = this.candidates[0];
      });
  }

  treasurer() {
    this.searchKey = "Treasurer";
    // console.log('At search = '+ this.searchKey);
    this.candidateService.getSearchCandidate(this.searchKey)
      .subscribe(res => {
        // console.log(res.data);
        this.candidates = res.data;
        this.newCandidates = res.data;
        this.sort();
        this.all_candidates[5] = this.candidates[0];
      });
  }

  publish() {
    this.adminService.isPublished()
      .subscribe(res =>{
        console.log(res.data);
          // localStorage.setItem('published','false');
        this.ngOnInit();
      });
  }
}
