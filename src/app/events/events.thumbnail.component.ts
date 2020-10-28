import {Component, Input, Output, EventEmitter} from '@angular/core';
import {IEvent} from '../events/shared/event.module'

@Component({
    selector: 'event-thumbnail',
    templateUrl: './events.thumbnail.component.html' ,
    styles: [`
        .pad-left{
            margin-left: 10px;

        }
        .well div{
            color: #bbb;
        }
        .green{
            color: #003300 !important;
        }
        .bold{
            font-weigth: bold;
        }`
    ]
})

export class EventThumbnailComponent {

    @Input() event: IEvent
    @Output() eventClick = new EventEmitter()

    logFoo() {
        console.log('Log foo')
    }
    handleThumbnailClick() {
        console.log('clicked!')
    }
    parentHandleThumbnailClick() {
        this.eventClick.emit('clicked for Parent sent!')
    }
    getStartTime() {
        const isEarly = this.event && this.event.time === '8:00 am'
        return {green: isEarly, bold: isEarly}
    }

}