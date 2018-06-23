import { Component, OnInit } from '@angular/core';
import { CandidateService} from "../../services/candidate.service";
import { Candidate} from "../../models/candidate";
import { Location} from "@angular/common";
import { Router} from "@angular/router";

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.css']
})
export class AddCandidateComponent implements OnInit {

  constructor(
    private candidateService: CandidateService,
    private location: Location,
    private router: Router
  ) { }


  candidate = new Candidate();

  firstName: String;
  middleName: String;
  lastName: String;
  position: String;
  dept: String;
  email: String;
  username: String;
  password: String;

  ngOnInit() {

  }

  registerCandidate(){

    this.candidate.firstName = this.firstName;
    this.candidate.middleName = this.middleName;
    this.candidate.lastName = this.lastName;
    this.candidate.position = this.position;
    this.candidate.dept = this.dept;
    this.candidate.email = this.email;
    this.candidate.username = this.username;
    this.candidate.password = this.password;

    this.candidateService.registerCandidate(this.candidate)
      .subscribe(res=>{
            this.router.navigate([`photo-upload-candidate/${res.data._id}`]);
      })

  }

}
