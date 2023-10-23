import { AfterViewInit, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from 'src/app/app.service';
import { Person } from 'src/app/interfaces/person';
import { PersonCardComponent } from "../../person-card/person-card.component";

@Component({
    selector: 'app-read-user',
    standalone: true,
    templateUrl: './read-user.component.html',
    styleUrls: ['./read-user.component.css'],
    imports: [CommonModule, PersonCardComponent]
})
export class ReadUserComponent {
  foundUser: Person | undefined;
  userNotFound = false;
  @ViewChild('userId') userIdInput!: ElementRef<HTMLInputElement>;

  constructor(private appService: AppService = Inject(AppService)){}

  onClick(){
    const id = this.userIdInput.nativeElement.value;
    this.appService.getUserById(parseInt(id)).subscribe({
      next: (user) => {
        if (user) {
          console.log(user);
          this.foundUser = user;
          this.userNotFound = false;
        }
      },
      error: (error) => {
        this.foundUser = undefined;
        this.userNotFound = true;
        console.log(error);
      },
      complete: () => {
        console.log('Operation Completed');
      }
    })
  }
}
