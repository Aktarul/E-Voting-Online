import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { HttpClientModule} from "@angular/common/http";
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

  authToken: any;
  user: any;

  constructor(private http:Http) { }

  registerUser(user){
    let headers = new Headers();
    headers.append('Content-type','application/json');
    return this.http.post('http://localhost:5500/user',user,{headers: headers})
      .map(res => res.json())
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-type','application/json');

    return this.http.post('http://localhost:8080/auth/loginregister',user,{headers: headers})
      .map( res => res.json());
  }

  authenticateAdmin(user){
    let headers = new Headers();
    headers.append('Content-type','application/json');

    return this.http.post('http://localhost:8080/auth/adminlogin',user,{headers: headers})
      .map( res => res.json());
  }


  getSiingleProfile(loginId){

    let headers = new Headers();
    this.loadToken();

    headers.append('Content-type','application/json');
    return this.http.get(`http://localhost:5500/user/${loginId}` ,{headers:headers})
      .map( res => res.json());
  }

  UpdateProfile(loginId, User){

    let headers = new Headers();
    this.loadToken();
    // console.log('In service upadte'+ JSON.stringify(User));
    headers.append('Content-type','application/json');
    return this.http.patch(`http://localhost:5500/user/${loginId}` ,User,{headers:headers})
      .map( res => res.json());
  }

  getProfile(){
    let headers = new Headers();
    this.loadToken();

    // console.log('Token '+this.authToken);

    headers.append('authorization',this.authToken);
    headers.append('Content-Type','application/json');

    return this.http.get('http://localhost:5500/user',{headers:headers})
      .map( res => res.json());
  }


  deleteProfile(id){
    let headers = new Headers();

    this.loadToken();

    console.log('In delete profile');

    // console.log('Token '+this.authToken);

    headers.append('authorization',this.authToken);
    headers.append('Content-Type','application/json');

    return this.http.delete(`http://localhost:5500/user/${id}`,{headers:headers})
      .map( res => res.json());
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  storeUserDatta(token,user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user',JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  loggedIn(){
    return tokenNotExpired('id_token');
  }

  isLoggedIn () {
    try {
      const token = localStorage.getItem('id_token');
      this.authToken = token;
    } catch (e) {
      return false;
    }

    if (this.authToken) {
      return true;
    } else {
      return false;
    }
  }

  isAdmin () {
    let isAdmin  = false;
    try {
      isAdmin = JSON.parse(localStorage.getItem('isAdmin'));
    } catch (e) {
      return false;
    }
    if (isAdmin) {
      return true;
    } else {
      return false;
    }
  }
}
