import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Injectable({
    providedIn: 'root'
})

export class ResetPasswordPage implements CanActivate {
    forgottenPwToken;

    constructor(
        private activatedRoute: ActivatedRoute,
        private loginService: LoginService,
        private router: Router
        ) { }

    canActivate(): boolean {
       
        if( !localStorage.getItem('forgottenPwToken')) {
            this.forgottenPwToken = window.location.pathname.split('/')[3];
            this.loginService.getForgetPasswordToken(this.forgottenPwToken).then( res => {
                
                if (this.forgottenPwToken !== res[0].forgetPassword) {
                    return false
                } else {
                    localStorage.setItem('forgottenPwToken', this.forgottenPwToken)
                    this.router.navigate([`front/TzApeyaNpBzRJmGrit59K4NJ5Cy/${this.forgottenPwToken}`])
                }
            })
        } else if (localStorage.getItem('forgottenPwToken')) {
            return true
        }
        
        return false
    }
    
    
}


// set token into local storage after comparing with token in bdd
// refresh page 
// check local storage token and then send guard