import { style } from '@angular/animations';
import {Component} from '@angular/core';
import { Session } from 'protractor';
import { EventService, ISession } from '../events';
import { AuthService } from '../user/auth.service';

@Component({
    selector: "nav-bar",
    templateUrl: './navbar.component.html' ,
    styles:[`
        .nav.navbar-nav{
            fontsize: 18px;
        }
        #searchForm{
            margin-right:100px;
        }
        li > a.active{
            color: #F97924;
        }
        @media (max-width:1200px){
            #searchForm{
                display:none;
            }
        }
    `]
})

export class NavBarComponent{
    searchTerm: string ="";
    foundSessions: ISession[];
    
    constructor(private auth:AuthService,private eventService:EventService){}
    searchSessions(searchTerm){

        this.eventService.searchSessions(searchTerm).subscribe(
            sessions=>{
                this.foundSessions = sessions;
                console.log(this.foundSessions)
            }
        )
    }



}