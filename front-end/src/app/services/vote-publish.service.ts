import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import { Http, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class VotePublishService {

  headers = new Headers();
  options = new RequestOptions();

  constructor(
    private http: Http
  ) {
    this.headers.append('Content-Type', 'application/json');
    this.options = new RequestOptions({ headers: this.headers });
  }


  // getSingleCandidate(id){
  //
  //   return this.http.get(`${environment.baseUrl}/candidate/${id}`, this.options)
  //     .map(res=>res.json());
  // }

}
