import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {

  constructor(private userService : UserServiceService) { }

  getUserRoute = 'http://localhost:4242/users/manage-users'
  userList:any

  ngOnInit() {
  }

  getUserList() {
     this.userService.getUser(this.getUserRoute).subscribe(user => {
       this.userList = user
     });
    console.log('USERLIST',this.userList)
  }

}
