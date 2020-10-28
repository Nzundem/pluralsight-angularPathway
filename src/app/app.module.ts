import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule} from '@angular/router';

import {
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  // EventRouteActivator,
  EventListResolverService,
  CreateSessionComponent,
  EventsListComponent,
  SessionListComponenet,
  DurationPipe,
  Toastr, TOASTR_TOKEN,
  CollapsibleWellComponent,
  JQ_TOKEN,
  SimpleModalComponenet,
  ModalTriggerDirective,
  UpvoteComponent,
  VoterService,
  LocationValidator,
  EventResolverService
}

from './events/index'

import {NavBarComponent} from './nav/navbar.component'
import { EventsAppComponent } from './events.app.component';
import {appRoutes} from './routes';
import { Error404Component } from './errors/4040.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

const toastr: Toastr = window['toastr'];
const jQuery: Object = window['$']

@NgModule({
  declarations: [
    CollapsibleWellComponent,
    NavBarComponent,
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
    Error404Component,
    SessionListComponenet,
    DurationPipe,
    SimpleModalComponenet,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,{preloadingStrategy:  PreloadAllModules}),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    EventService,
    VoterService,
    EventResolverService,
    // EventRouteActivator, this is a route guard that has been deleted because the rout is now listening to an observabel, not an event, watch video 4 of module 14
    {provide: TOASTR_TOKEN, useValue: toastr},
    {provide: JQ_TOKEN, useValue: jQuery},
    AuthService,
    EventListResolverService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }

  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you want to still cancel?')
  }
  return true
}