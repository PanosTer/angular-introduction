import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Panagiotis";
  lastname = "Terzakis";

  person = {
    givenName: 'Pan',
    surName:'Terz',
    age: 30,
    email: 'pan@gmail.com'
  };
}
