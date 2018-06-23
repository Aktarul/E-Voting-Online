import { Injectable } from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Injectable()
export class PasswordValidationService {

  constructor() { }

   MatchPassword(AC: AbstractControl) {
    let password = AC.get('password').value; // to get value in input tag
    let confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
    if(password != confirmPassword) {
      console.log('false');
      AC.get('confirmPassword').setErrors( {MatchPassword: true} )
    } else {
      console.log('true');
      return null
    }
  }

}
