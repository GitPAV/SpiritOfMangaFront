import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwitchFrontToBackService } from 'src/app/services/switch-front-to-back.service';

@Component({
  selector: 'app-header-back',
  templateUrl: './header-back.component.html',
  styleUrls: ['./header-back.component.scss']
})
export class HeaderBackComponent implements OnInit {

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
