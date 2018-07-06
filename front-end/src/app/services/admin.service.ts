import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from "@angular/http";
import { environment} from "../../environments/environment";
import 'rxjs/add/operator/map';


@Injectable()
export class AdminService {

  headers = new Headers();
  options = new RequestOptions();

  constructor(
    private http: Http
  ) {
    this.headers.append('Content-Type', 'application/json');
    this.options = new RequestOptions({ headers: this.headers });
  }

  getSingleAdmin(){
    let id  = '5b2db5832c038408600e61ee';
    return this.http.get(`api/admin/${id}`, this.options)
      .map(res=>res.json());
  }

  isPublished() {
    let id  = '5b2db5832c038408600e61ee';
      return this.http.post(`api/admin/publish/${id}`,this.options)
        .map( res=>res.json());
  }

}
