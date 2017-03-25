import { Component, OnInit } from '@angular/core';
import {User} from "firebase/app";
import {Observable} from "rxjs";
import {UserService} from "../user.service";

@Component({
  selector: 'cp-users-view',
  templateUrl: './users-view.component.html'
})
export class UsersViewComponent implements OnInit {

  users : Observable<User[]>

  constructor(private userService : UserService) { }

  ngOnInit() {
  this.users = this.userService.getUsers();
  }

}
