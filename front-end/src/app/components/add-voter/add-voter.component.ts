import { Component, OnInit } from '@angular/core';
import { Voter} from "../../models/voter";
import { VoterService} from "../../services/voter.service";
import { Location} from "@angular/common";
import { Router} from "@angular/router";

@Component({
  selector: 'app-add-voter',
  templateUrl: './add-voter.component.html',
  styleUrls: ['./add-voter.component.css']
})
export class AddVoterComponent implements OnInit {

  firstName: String;
  middleName: String;
  lastName: String;
  dept: String;
  email: String;
  username: String;
  password: String;
  confirmPassword: String;

  voter =  new Voter();

  constructor(
    private voterService: VoterService,
    private location: Location,
    private router: Router

  )
  {
  }

  ngOnInit() {

  }

  registerVoter(){
      this.voter.firstName = this.firstName,
      this.voter.middleName = this.middleName,
      this.voter.lastName = this.lastName,
      this.voter.dept = this.dept,
      this.voter.email = this.email,
      this.voter.username = this.username,
      this.voter.password = this.password


    this.voterService.registerVoter(this.voter)
      .subscribe(res=>{
        console.log(res);
        this.router.navigate([`/photo-upload/${res.data._id}`]);
      })

  }

}
