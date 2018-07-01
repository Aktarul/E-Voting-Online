import { Component, OnInit } from '@angular/core';
import {Candidate} from "../../models/candidate";
import {ActivatedRoute, Router} from "@angular/router";
import {CandidateService} from "../../services/candidate.service";

@Component({
  selector: 'app-view-candidate3',
  templateUrl: './view-candidate3.component.html',
  styleUrls: ['./view-candidate3.component.css']
})
export class ViewCandidate3Component implements OnInit {
  published: any = false;

  constructor(
    private candidateService: CandidateService,
    private route: ActivatedRoute,
    private router: Router,

  ) { }

  candidate = new Candidate();

  ngOnInit() {
    if(localStorage.getItem('published') == "true"){
      this.published = true;
    }

    this.candidateService.getSingleCandidate(this.route.snapshot.params.id)
      .subscribe( res=>{
        console.log(res.data);
        this.candidate = res.data;
      })
  }

  canList() {
    this.router.navigate(['/member']);
  }

}
