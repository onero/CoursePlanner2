import {Component} from '@angular/core';
import {Course} from './Course';

@Component({
  selector: 'cp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
