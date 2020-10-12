import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { ProfileComponent } from './profile.component';
import {UserRoutes} from './user.routes';

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(UserRoutes)

    ],
    declarations:[
        ProfileComponent
    ],
    providers:[

    ]

})

export class UserModule{}