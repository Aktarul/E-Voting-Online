import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from "@angular/http";
import { environment} from "../../environments/environment";
import 'rxjs/add/operator/map';


@Injectable()
export class VoterService {

  headers = new Headers();
  options = new RequestOptions();

  constructor(
    private http: Http
  ) {
    this.headers.append('Content-Type', 'application/json');
    this.options = new RequestOptions({ headers: this.headers });
  }



  getVoter(){
    let headers  = new Headers();

    headers.append('content-type','applicationn/json');

    return this.http.get(`${environment.baseUrl}/voter`, this.options)
      .map(res=>res.json());

  }

  registerVoter(voter){
      return this.http.post(`${environment.baseUrl}/voter`,voter,this.options)
        .map( res=>res.json());
  }

  deleteVoter(id){
    return this.http.delete(`${environment.baseUrl}/voter/${id}`, this.options)
      .map( res=> res.json());
  }

}
