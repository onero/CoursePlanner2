import { Component, OnInit } from '@angular/core';
import {AngularFire} from "angularfire2";
import User = firebase.User;
import {Observable} from "rxjs";
import {UserService} from "../users/user.service";

@Component({
  selector: 'cp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  toolbarTitle = 'Course Planner 2';
  users: Observable<User[]>;

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

}
