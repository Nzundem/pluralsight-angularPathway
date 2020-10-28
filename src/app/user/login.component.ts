import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Toastr, TOASTR_TOKEN } from '../common/toastr.service';

@Component({
    templateUrl: './login.component.html'
})

export class LoginComponent {
    constructor(private authService: AuthService, private router: Router, @Inject(TOASTR_TOKEN) private toastr: Toastr) {}
    userName = 'johnpapa'
    password
    loginInvalid = false;
    mouseoverLogin

    login(formValues) {
        this.authService.loginUser(formValues.userName, formValues.password)
        .subscribe(resp => {
            if (!resp) {
                this.loginInvalid = true

            } else {
                this.toastr.success('Successfully login!')
                this.router.navigate(['events'])

            }
        })
    }
    cancel() {
        this.router.navigate(['events'])
    }
}