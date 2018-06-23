import { Component, OnInit } from '@angular/core';
import { CandidateService} from "../../services/candidate.service";
import { Candidate} from "../../models/candidate";
import { ActivatedRoute, Router} from "@angular/router";
import { Location} from "@angular/common";


@Component({
  selector: 'app-update-candidate',
  templateUrl: './update-candidate.component.html',
  styleUrls: ['./update-candidate.component.css']
})
export class UpdateCandidateComponent implements OnInit {

  constructor(
    private candidateService: CandidateService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  candidate = new Candidate();

  ngOnInit() {

    let id = this.route.snapshot.params.id;



    this.candidateService.getSingleCandidate(id)
      .subscribe(res=>{
        this.candidate = res.data;
      })

  }

  updateCandidate(candidate){
    this.candidateService.updateCandidate(candidate)
      .subscribe(res=>{
        // console.log(res)

        this.router.navigate([`photo-upload-candidate/${res.data._id}`]);

      })
  }

}
