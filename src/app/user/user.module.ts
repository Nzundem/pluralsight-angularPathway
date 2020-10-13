import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './login.component';
import { ProfileComponent } from './profile.component';
import {UserRoutes} from './user.routes';

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(UserRoutes),
        FormsModule

    ],
    declarations:[
        ProfileComponent,
        LoginComponent
    ],
    providers:[

    ]

})

export class UserModule{}