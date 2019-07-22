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
        let guardBoolean
    
        this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
            this.forgottenPwToken = parseInt(params.get('token'));
            console.log(this.forgottenPwToken)
        })

        this.loginService.getForgetPasswordToken(this.forgottenPwToken).then( res => {
            // get forgetPassword from BDD and set to session storage
            if ( this.forgottenPwToken !== res) {
                guardBoolean = false
            } else {
                guardBoolean = true
                localStorage.setItem('forgottenPwToken', this.forgottenPwToken)
                this.router.navigate([`front/TzApeyaNpBzRJmGrit59K4NJ5Cy/${this.forgottenPwToken}`])
            }
        })

        return guardBoolean

          
    }
    
    
}


// set token into local storage after comparing with token in bdd
// refresh page 
// check local storage token and then send guard