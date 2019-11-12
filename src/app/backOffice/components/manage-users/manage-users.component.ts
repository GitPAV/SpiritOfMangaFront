import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {



  constructor(private userService: UserServiceService) { }

  getUserRoute = 'http://localhost:4242/users/manage-users'
  deleteUserRoute = 'http://localhost:4242/users/delete-users'
  userList: any

  ngOnInit() {
    this.getUserList()
  }

  getUserById(id: number) {
    this.userService.getUserById(id)
  }

  deleteUser(id) {
    this.userService.sendUpdatedList(this.deleteUserRoute, id)
  }

  getUserList() {
    this.userService.getUser(this.getUserRoute).subscribe(user => {
      this.userList = user
      this.userService.listenUserList.subscribe(newUsersList => {
        this.userList = newUsersList
      })
    });

  }
}
