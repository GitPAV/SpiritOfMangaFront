import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserServiceService } from '../../../services/user-service.service';
import { SwitchFrontToBackService } from '../../../services/switch-front-to-back.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy{
  userMail: string;
  adminConnected: boolean;
  route = 'http://localhost:4242/users/display-user';
  userConnected;
  loginForm = false;
  status; 

  constructor(private userService: UserServiceService,
    private goToBackOfficeService: SwitchFrontToBackService,
    private router: Router) { 
      this.userService.userConnect.subscribe(status => {
        console.log('sub', status)
        this.status = status
      }) 
    }
  ngOnInit() {
    this.adminConnected = false;
    this.goToBackOfficeService.getAdminClick(this.adminConnected)
    this.userService.logStatus()
    console.log('logStatus passed');
    
  
    console.log('after sub');
    
    // 'token' in localStorage ? this.status === true : this.status = false ;
  }

  ngOnDestroy() {
    this.userService.userConnect.unsubscribe()
  }

  getUserConnected(email){
    this.userMail = email;
    this.userService.userGetEmail(this.userMail, this.route)
      .subscribe( user => {
        this.userConnected = user
        this.getUserStatus()
      })
  }

  getUserStatus(){
    this.userConnected[0].droits === 'admin' ? this.adminConnected = true : this.adminConnected = false;
  }

  activateLoginForm(){
    this.loginForm = !this.loginForm
  }

}
