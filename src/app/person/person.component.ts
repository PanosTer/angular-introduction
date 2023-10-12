import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  person = {
    givenName: 'Pan',
    surName:'Terz',
    age: 30,
    email: 'pan@gmail.com'
  };

}
