import { style } from '@angular/animations';
import {Component} from '@angular/core';

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
        @media (max-width:1200px){
            #searchForm{
                display:none;
            }
        }
    `]
})

export class NavBarComponent{

}