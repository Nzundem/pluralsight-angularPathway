import {Routes} from '@angular/router';
import {
    EventsListComponent,
    CreateEventComponent,
    EventDetailsComponent,
    EventRouteActivator,
    EventListResolverService

} from './events/index'
import { Error404Component } from './errors/4040.component';

export  const appRoutes:Routes =[
    {path: 'events/new', component:CreateEventComponent, canDeactivate:['canDeactivateCreateEvent']},
    {path: 'events', component: EventsListComponent, resolve:{events:EventListResolverService} },
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
    {path:'404',component: Error404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {path:'user',loadChildren:'./user/user.module#UserModule'}

]

