import { Component, OnInit } from '@angular/core';
import { SwitchFrontToBackService } from '../../../services/switch-front-to-back.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-back-office-page',
  templateUrl: './back-office-page.component.html',
  styleUrls: ['./back-office-page.component.scss']
})
export class BackOfficePageComponent implements OnInit {

  dateValue = new Date;

  constructor(private frontToBack: SwitchFrontToBackService, private router: Router) { }

  ngOnInit() {
  }

  logOut(){
    let logOut = false
    this.frontToBack.getAdminClick(logOut)
    localStorage.removeItem("token")
    this.router.navigate([''])
    console.log(localStorage.getItem("token"))
  }

}
