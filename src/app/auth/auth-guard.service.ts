import { Injectable } from '@angular/core';
import { Router, CanActivate, CanDeactivate } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(public auth: AuthService, public router: Router) { }
    canActivate(): boolean {
        if (!this.auth.isAuthenticated()) {
            console.log("not login in   ...")
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
    canDeactivate(): boolean {
        if (this.auth.isAuthenticated()) {
            this.router.navigate(['list']);
            return false;
        }
        return true;
    }
}