import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { Person } from './interfaces/person';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Panagiotis";
  lastname = "Terzakis";

    person: Person = {
    givenName: 'Pan',
    surName:'Terz',
    age: 30,
    email: 'pan@gmail.com',
    address: 'Athens'
  };
}
