import { Component, OnInit } from '@angular/core';
import { AuthService } from './user/auth.service';
@Component({
  selector: 'events-app',
  template: `
  <nav-bar></nav-bar>
  <router-outlet></router-outlet>
  `,
  styleUrls: []
})
export class EventsAppComponent implements OnInit{
  constructor(private auth:AuthService){}

  ngOnInit(){
    this.auth.checkAuthenticatedStatus();
  }
  title = 'ng-fundamentals';
}
