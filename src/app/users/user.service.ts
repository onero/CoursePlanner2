import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {User} from "firebase/app";
import {Observable} from "rxjs";

@Injectable()
export class UserService {

  constructor(private af : AngularFire) { }

  getUsers() : Observable<User[]>{
    return this.af.database.list('users');
  }

}
