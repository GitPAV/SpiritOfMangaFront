import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service'

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(private userService : UserServiceService) { }

  getUserRoute = 'http://localhost:4242/users/get-users/1'
  userDetails:any

  ngOnInit() {
    this.fuckOnInit()
    // this.getUserDetails()
    // console.log('Oninit', this.userDetails)
  }

  fuckOnInit() {
    this.getUserDetails()
    console.log('fckONINIT',this.userDetails)
  }

  getUserDetails() {
     this.userService.getUserDetails(this.getUserRoute).subscribe(user => {
      console.log('USER****', user)
       this.userDetails = user
       console.log('USERDETAILS****',this.userDetails)
       
     });
    
    

  }


}
