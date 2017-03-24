import { Injectable } from '@angular/core';
import {User} from "../users/user";
import {Observable} from "rxjs";
import {AngularFire, FirebaseAuthState} from "angularfire2";

@Injectable()
export class AuthService {

  constructor(private af : AngularFire) {
  }

  login(email, password) : Observable<FirebaseAuthState>{
    let promise = <Promise<FirebaseAuthState>> this.af.auth.login({
      email: email,
      password: password,
    })
    return Observable.fromPromise(promise);
  }

  currentUser(){
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  logout(){
    return localStorage.removeItem('currentUser');
  }

}
