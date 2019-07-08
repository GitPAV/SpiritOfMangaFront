import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service'

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(private userService : UserServiceService) { }

  
  userDetails:any
  idDetails: number

  ngOnInit() {
    this.getUserDetails()

  }

  getUserDetails() {
    this.idDetails = this.userService.sendUserId()
    let getUserRoute = 'http://localhost:4242/users/get-users/' + this.idDetails

     this.userService.getUserDetails(getUserRoute).subscribe(user => {
       this.userDetails = user
     }); 
  }

}
