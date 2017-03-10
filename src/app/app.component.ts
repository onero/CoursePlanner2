import {Component} from '@angular/core';
import {Course} from './Course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Adamino Courses!';

  courses: Course[];

  constructor() {
    this.courses = [
      {
        academy: 'EASV',
        year: 2017,
        title: 'Angular2',
        education: 'Computer Science',
        lecturer: 'Lars Bilde'
      },
      {
        academy: 'EASV',
        year: 2017,
        title: 'Driving on the bus',
        education: 'Computer Science',
        lecturer: 'Adam Hansen'
      }
    ];
  }
}
