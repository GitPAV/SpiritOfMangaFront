import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { SwitchFrontToBackService } from '../../../services/switch-front-to-back.service';
import { Router } from '@angular/router';
import { UserServiceService } from '../../../services/user-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  adminConnected: boolean;
  loginForm: FormGroup;
  userMail: string;
  route = 'http://localhost:4242/users/display-user';
  userConnected;

  constructor(private fb: FormBuilder, 
    private loginService: LoginService,
    private router: Router,
    private goToBackOfficeService: SwitchFrontToBackService,
    private userService: UserServiceService,) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.getUserConnected(this.loginForm.get("email").value)
    this.loginService.loginPost(this.loginForm.value)
    .then( res => {
      localStorage.setItem("token", res);
      this.loginService.protectPost().then( (res) => {        
        this.loginService.login();
        this.userMail = this.loginForm.get('email').value;
        this.getUserStatus()
        console.log('allo');
        
        this.userService.logStatus()
        // this.router.navigate([''])
      } )
    }/* can make another get or send email to user or...*/)
    .catch( error => {
      console.error(error);
      alert('Mauvais email ou mot de passe')
      this.router.navigate(['creation-utilisateur'])
    });
  }

  goToBackOffice(){
    this.router.navigate(['back'])
    console.log("user go to back")
    this.goToBackOfficeService.getAdminClick(this.adminConnected);
  }
  getUserConnected(email){
    this.userMail = email;
    this.userService.userGetEmail(this.userMail, this.route)
      .subscribe( user => {
        // console.log('user', user);
        
        this.userConnected = user
        this.getUserStatus()
      })
  }

  getUserStatus(){
    // console.log(this.userConnected);
    
    if(this.userConnected[0].droits === 'admin') {
      this.adminConnected = true
    } else {
      this.adminConnected = false;
      this.router.navigate(['front/page-dacceuil'])
    }
  }
  goToFrontOffice(){
    this.router.navigate(['front'])
  }
}
