import { Component, OnInit } from '@angular/core';
import { CandidateService} from "../../services/candidate.service";
import { Candidate} from "../../models/candidate";
import { ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-view-candidate',
  templateUrl: './view-candidate.component.html',
  styleUrls: ['./view-candidate.component.css']
})
export class ViewCandidateComponent implements OnInit {

  constructor(
    private candidateService: CandidateService,
    private route: ActivatedRoute,
    private router: Router,

  ) { }

  candidate = new Candidate();

  ngOnInit() {

    this.candidateService.getSingleCandidate(this.route.snapshot.params.id)
      .subscribe( res=>{
        console.log(res.data);
        this.candidate = res.data;
      })

  }

  canList() {
    this.router.navigate(['/candidate-list']);
  }

}
