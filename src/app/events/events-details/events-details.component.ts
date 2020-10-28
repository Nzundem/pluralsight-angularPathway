import { Component } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { IEvent, ISession } from '../shared/index';
import { EventService } from '../shared/event.service';

@Component({
    templateUrl: './events-details.component.html',
    styles: [`
    .container {
        padding-left: 20px;
        padding-right: 20px;
    }
    .event-image{
        height: 100px;
    }
    a{
        cursor: pointer;
    }
    `]
})
export class EventDetailsComponent {
    event: IEvent;
    addMode: boolean
    filterBy = 'all';
    sortBy = 'name';
    saveNewSessionForEventDetails(session: ISession) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id))
        session.id = nextId + 1
        this.event.sessions.push(session)
        this.eventService.saveEvent(this.event).subscribe()
        this.addMode = false
    }
    cancelAddSessionForEventDetails() {
        this.addMode = false
    }

    constructor(private eventService: EventService, private route: ActivatedRoute) { }

    addSession() {
        this.addMode = true
    }

    ngOnInit() {

        this.route.data.forEach((data) => {

                this.event =  data['event']
                this.addMode = false;
                this.filterBy = 'all';
                this.sortBy = 'name';

        })

    }
}
