import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../../services/user-service.service';
import { SwitchFrontToBackService } from '../../../services/switch-front-to-back.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  userMail: string;
  adminConnected: boolean;
  route = 'http://localhost:4242/users/display-user';
  userConnected;
  loginForm = false;

  constructor(private userService: UserServiceService,
    private goToBackOfficeService: SwitchFrontToBackService,
    private router: Router) { }

  ngOnInit() {
    this.adminConnected = false;
    this.goToBackOfficeService.getAdminClick(this.adminConnected)
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

  goToBackOffice(){
    this.router.navigate(['back'])
    this.goToBackOfficeService.getAdminClick(this.adminConnected);
  }

  activateLoginForm(){
    this.loginForm = !this.loginForm
  }

}
