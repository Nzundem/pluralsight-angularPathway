import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events.app.component';
import {EventsListComponent} from './events/events.list.component';
import {EventThumbnailComponent} from './events/event.thumbnail.component'
import {EventService} from './events/shared/event.service'

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    EventService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
