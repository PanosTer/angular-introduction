import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { Person } from './interfaces/person';
import { PersonAltComponent } from './person-alt/person-alt.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { OutputDemoComponent } from './output-demo/output-demo.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    PersonComponent, 
    PersonAltComponent, 
    EventBindComponent, 
    OutputDemoComponent, 
    PersonCardComponent, 
    TemplateDrivenFormComponent,
    ReactiveFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name: string = "Panagiotis";
  lastname = "Terzakis";

    person: Person = {
    givenName: 'Pan',
    surName:'Terz',
    age: 30,
    email: 'pan@gmail.com',
    address: 'Athens'
  };

  person2: Person = {
    givenName: 'Nikos',
    surName:'Pappas',
    age: 40,
    email: 'nik@gmail.com',
    address: 'London'
  };
    
users: Person[] = [];

sendUser: Person | undefined;

constructor(private appService: AppService = Inject(AppService)) {}

ngOnInit(): void {
  this.appService.getAllUsers().subscribe((users) => {
    this.users = users
    console.log(this.users)
  })
}

onDeleteUser(i:number){
  this.users.splice(i,1)
}

onSendUser(user: Person){
  console.log(user)
  this.sendUser = user;
}

onNewPerson(person: Person){
  this.users.push(person);
}
  
}
