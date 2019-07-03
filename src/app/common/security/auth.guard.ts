import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../../services/login.service';

// @Injectable({
//     providedIn: 'root'
// })

// export class AuthGuard implements CanActivate{

//     constructor(private authService: LoginService, private router: Router){ }

//     canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
//         console.log(this.authService.isLoggedIn)
//         if (!this.authService.isLoggedIn) {
//             this.router.navigate(['/form-user'])
//             return false
//         } else {
//             return true
//         }
//     }
// }

// ****************************
// DISABLE FOR DEVELOPEMENT PURPOSE
// TO ENABLE LOGIN / GUARD REMOVE COMMENTS FROM HERE, ROUTER OUTLER && ENABLE NGIF ON APPCOMPONENT
// ****************************<