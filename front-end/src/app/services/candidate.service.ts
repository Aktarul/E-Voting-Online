import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from "@angular/http";
import { environment} from "../../environments/environment";
import 'rxjs/add/operator/map';

@Injectable()
export class CandidateService {

  headers = new Headers();
  options = new RequestOptions();

  constructor(
    private http: Http
  ) {
    this.headers.append('Content-Type', 'application/json');
    this.options = new RequestOptions({ headers: this.headers });
  }


  getCandidate(){

    return this.http.get(`${environment.baseUrl}/candidate`, this.options)
      .map(res=>res.json());

  }

  getSingleCandidate(id){

    return this.http.get(`${environment.baseUrl}/candidate/${id}`, this.options)
      .map(res=>res.json());
  }

  registerCandidate(candidate){
    return this.http.post(`${environment.baseUrl}/candidate`,candidate,this.options)
      .map( res=>res.json());
  }

  deleteCandidate(id){
    return this.http.delete(`${environment.baseUrl}/candidate/${id}`, this.options)
      .map( res=> res.json());
  }

  updateCandidate(candidate){
    return this.http.patch(`${environment.baseUrl}/candidate/${candidate._id}`, candidate, this.options)
      .map( res=> res.json());
  }

  getSearchCandidate(id){

    console.log('at get Search service:' + id );
    let headers = new Headers();
    headers.append('Content-type','application/json');

    return this.http.get(`http://localhost:8080/api/candidate/search/${id}`,{headers: headers})
      .map(res => res.json())
  }

}
