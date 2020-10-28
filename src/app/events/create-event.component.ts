import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared';

@Component({
    templateUrl: './create-event.component.html',
    styles: [`
  em{float:right;
    color: #E05C65;
    padding-left: 10px;

  }
  .error input{
    background-color: #E05C65;
  }
  .error::-webkit-input-placeholder{
    color: #999;
  }
  .error :: -moz-placeholder {
    color:#999;
  }
  .error : -moz-placeholder{
    color:#999;
  }
  .error : -ms-input-placeholder{
    color:#999;
  }

  `]
})

export class CreateEventComponent {
    isDirty = true
    newEvent
    event: any

    constructor(private router: Router, private eventService: EventService) {}

    saveEvent(formValues) {
       this.eventService.saveEvent(formValues).subscribe(() => {
        this.isDirty = false
        this.router.navigate(['/events'])

       })
    }

    cancel() {
        this.router.navigate(['/events'])

    }
    ngOnInit(event) {
        this.event = {
            name: 'Ng Spectacular',
            date: '10/10/20',
            time: '10am',
            price: 799,
            location: {
                address: '459 Happy Street',
                city: 'Felicity',
                country: 'Angularistan'
            },
            onlineUrl: 'http://ngSpectcular.com',
            imageUrl: 'http://ngSPectacular.com/logo.png'
        }
    }
}