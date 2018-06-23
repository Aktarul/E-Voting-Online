import { Component, OnInit } from '@angular/core';
import { VoterService} from "../../services/voter.service";
import { Voter} from "../../models/voter";
import { environment} from "../../../environments/environment";
import { Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-voter-list',
  templateUrl: './voter-list.component.html',
  styleUrls: ['./voter-list.component.css']
})
export class VoterListComponent implements OnInit {

  // newVoters: any = [];

  constructor(
    private voterService: VoterService,
    private router: Router,
    public authService: AuthService
  ) { }

  voters: Array<Voter> = new Array<Voter>();
  newVoters: Array<Voter> = new Array<Voter>();
  backupVoters: Array<Voter> = new Array<Voter>();

  ngOnInit() {
    this.voterService.getVoter()
      .subscribe(res=>{
          this.voters = res.data;
          this.backupVoters = res.data;
          // console.log(this.voters);
      })
  }

  deleteVoter(voter){
    this.voterService.deleteVoter(voter._id).subscribe(res=>{
      console.log(res);
    })
  }

  addVoter(){
    this.router.navigate(['add-voter']);
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

  voted() {
    this.newVoters = [];
    let j = 0;

    let max_length = this.backupVoters.length;

    for(let i = 0 ; i < max_length ; i++){
      if( this.backupVoters[i].status == true ) {
        this.newVoters[j] = this.backupVoters[i];
        j++;
        // console.log('true it\'s' + i);
      }
    }

    this.voters = this.newVoters;
    console.log(this.voters);
  }

  unvoted() {
    this.newVoters = [];
    let j = 0;

    let max_length = this.backupVoters.length;

    for(let i = 0 ; i < max_length ; i++){
      if( this.backupVoters[i].status == false ) {
        this.newVoters[j] = this.backupVoters[i];
        j++;
        // console.log('true it\'s' + i);
      }
    }

    this.voters = this.newVoters;
    console.log(this.voters);
  }

}
