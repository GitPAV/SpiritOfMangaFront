import { Component, OnInit } from '@angular/core';
import { SwitchFrontToBackService } from './services/switch-front-to-back.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Spirit Of Manga';
  backOfficeCheck: string = localStorage.getItem('backOfficeOn') ? localStorage.getItem('backOfficeOn') : 'false';
  backOfficeOn: boolean;

  constructor(private frontToBack: SwitchFrontToBackService){}

  ngOnInit(){

    localStorage.getItem('backOfficeOn') === 'true' ? this.backOfficeOn = true : this.backOfficeOn = false
    console.log(localStorage.getItem('backOfficeOn'))

    this.frontToBack.sendBool.subscribe(bool => {
        this.backOfficeOn = bool;
        this.backOfficeOn === true ? JSON.stringify(localStorage.setItem("backOfficeOn", 'true')) : JSON.stringify(localStorage.setItem("backOfficeOn", 'false'))
        this.checkBoolAdmin()
      })
  }

  checkBoolAdmin(){
    if(localStorage.getItem('backOfficeOn')  && localStorage.getItem('backOfficeOn') === 'true') {
      this.backOfficeOn = true
    } else {
      this.backOfficeOn = false
    }
  }

}
