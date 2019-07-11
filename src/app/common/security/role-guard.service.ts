import { Injectable } from '@angular/core';
import { 
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { LoginService } from '../../services/login.service';
import decode from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})

export class RoleGuardService implements CanActivate {

    constructor(
        private loginService: LoginService,
        private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot): boolean {

        const token = localStorage.getItem('token')

        const expectedRole = route.data.expectedRole;

        const tokenPayload = decode(token)

        if (!this.loginService.login() || tokenPayload.droits !== expectedRole) {
            this.router.navigate(['/user-login'])
            return false
        }
        return true
    }

}