import { Component } from '@angular/core';
@Component({
  selector: 'events-app',
  template: `
  <nav-bar></nav-bar>
  <events-list></events-list>
  `,
  styleUrls: []
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
