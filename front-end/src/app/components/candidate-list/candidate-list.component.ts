import { Component, OnInit } from '@angular/core';
import { CandidateService} from "../../services/candidate.service";
import {Router} from "@angular/router";
import { Candidate} from "../../models/candidate";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {

  category: String;
  searchKey: any;
  newCandidates: any =[];

  constructor(
    private candidateService: CandidateService,
    private router: Router,
    public authService: AuthService
  ) { }


  candidates: Array<Candidate> = new Array<Candidate>();

  ngOnInit() {
    if(localStorage.getItem('is_member_visited') == "true"){
      localStorage.setItem('member_vote','true');
    }

    this.candidateService.getCandidate()
      .subscribe(res =>{
        this.candidates = res.data;
        console.log(this.candidates);
      });
  }

  registerCandidate(){
    this.router.navigate(['add-candidate']);
  }

  updateCandidate(candidate){
    this.router.navigate([`update-candidate/${candidate._id}`]);
  }

  // deleteCandidate(candidate){
  //   this.candidateService.deleteCandidate(candidate._id)
  //     .subscribe(res=>{
  //       console.log(res.data);
  //     })
  // }


  deleteCandidate(candidate){
    var r = confirm("Are you sure!");
    if (r == true) {
      this.candidates.splice(this.candidates.indexOf(candidate), 1);
      this.candidateService.deleteCandidate(candidate._id)
        .subscribe(res=>{
        })
    } else {
      // this.toasterService.Warning("You have cancelled deletion!!");
    }
  }

  viewCandidate(candidate){
    this.router.navigate([`view-candidate/${candidate._id}`]);
  }

  president() {
    this.searchKey = "President";
    console.log('At search = '+ this.searchKey);
    this.candidateService.getSearchCandidate(this.searchKey)
      .subscribe(res => {
        console.log(res.data);
        this.candidates = res.data;
        this.newCandidates = res.data;
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
      });
  }

}
