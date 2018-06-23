import {Component, OnInit} from "@angular/core";
import { FileSelectDirective, FileUploader} from 'ng2-file-upload';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { VoterService} from "../../services/voter.service";
import { ActivatedRoute } from '@angular/router';
import { environment} from "../../../environments/environment";
import { Router} from "@angular/router";


const uri = 'http://localhost:3000/product';

let ur2;

@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.css']
})
export class PhotoUploadComponent implements OnInit {

  ngOnInit() {


  }


  uploader:FileUploader;

  attachmentList:any = [];

  product : object;

  // http://localhost:4200/photo/5aca319a784c6127c01e3f48
  constructor(
    private voterService: VoterService,
    private route: ActivatedRoute,
    private router: Router

  ){



    const id = this.route.snapshot.paramMap.get('id');

    ur2 = `${environment.baseUrl}/voter/${id}`;


    this.product = [];

    this.uploader = new FileUploader({url:ur2});

    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };

    this.uploader.onCompleteItem = (item:any, response:any , status:any, headers:any) => {
      this.attachmentList.push(JSON.parse(response));
      console.log(item);

      this.router.navigate(['/voter-list']);
    }
  }
}




