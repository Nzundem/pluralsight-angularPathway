import { Component } from '@angular/core';
@Component({
  selector: 'events-app',
  template: `
  <nav-bar></nav-bar>
  <router-outlet></router-outlet>
  `,
  styleUrls: []
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
