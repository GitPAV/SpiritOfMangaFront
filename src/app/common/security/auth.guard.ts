import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate{

    constructor(private authService: LoginService, private router: Router){ }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        console.log(this.authService.login())
        if (!this.authService.login()) {
            this.router.navigate(['/form-user'])
            return false
        } else {
            return true
        }
    }
}