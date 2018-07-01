import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {CandidateService} from "../../services/candidate.service";
import {Candidate} from "../../models/candidate";

@Component({
  selector: 'app-canvassing-report',
  templateUrl: './canvassing-report.component.html',
  styleUrls: ['./canvassing-report.component.css']
})
export class CanvassingReportComponent implements OnInit {

  candidates: Array<Candidate> = new Array<Candidate>();
  newCandidates: Array<Candidate> = new Array<Candidate>();
  temp_candidates: Array<Candidate> = new Array<Candidate>();

  tempCan = new Candidate();

  searchKey: any;
  published = false;

  constructor(
    public authService: AuthService,
    private router: Router,
    private candidateService: CandidateService
  ) { }

  ngOnInit() {
    if(localStorage.getItem('published') == "true"){
      this.published = true;
    }
    if(localStorage.getItem('is_member_visited') == "true"){
      localStorage.setItem('member_vote','true');
    }

    this.candidateService.getCandidate()
      .subscribe(res =>{
        this.candidates = res.data;
        console.log(this.candidates);

        this.sort();
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
        console.log(this.temp_candidates);
        // console.log(this.candidates);

        // console.log(res.data);
        this.newCandidates = this.temp_candidates;
        this.sort();
      });
  }

  vice_president() {
    this.searchKey = "Vice President";
    console.log('At search = '+ this.searchKey);
    this.candidateService.getSearchCandidate(this.searchKey)
      .subscribe(res => {
        console.log(res.data);
        this.candidates = res.data;
        this.newCandidates = res.data;
        this.sort();
      });
  }


  members() {
    this.searchKey = "Member";
    console.log('At search = '+ this.searchKey);
    this.candidateService.getSearchCandidate(this.searchKey)
      .subscribe(res => {
        console.log(res.data);
        this.candidates = res.data;
        this.newCandidates = res.data;
        this.sort();
      });
  }


  general_secretary() {
    this.searchKey = "General Secretary";
    console.log('At search = '+ this.searchKey);
    this.candidateService.getSearchCandidate(this.searchKey)
      .subscribe(res => {
        console.log(res.data);
        this.candidates = res.data;
        this.newCandidates = res.data;
        this.sort();
      });
  }


  joint_secretary() {
    this.searchKey = "Joint Secretary";
    console.log('At search = '+ this.searchKey);
    this.candidateService.getSearchCandidate(this.searchKey)
      .subscribe(res => {
        console.log(res.data);
        this.candidates = res.data;
        this.newCandidates = res.data;
        this.sort();
      });
  }

  treasurer() {
    this.searchKey = "Treasurer";
    console.log('At search = '+ this.searchKey);
    this.candidateService.getSearchCandidate(this.searchKey)
      .subscribe(res => {
        console.log(res.data);
        this.candidates = res.data;
        this.newCandidates = res.data;
        this.sort();
      });
  }

}
