import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../../services/user-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  userMail: string;
  adminConnected: boolean;
  route = 'http://localhost:4242/users';
  userConnected;

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
  }

  getUserConnected(email){
    this.userMail = email;
    this.userService.userGetEmail(this.userMail, this.route)
      .subscribe( user => {
        this.userConnected = user
        console.log(this.userConnected)
      })
  }

  getUserStatus() {
  }

}
