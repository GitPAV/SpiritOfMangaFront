import { Component, OnInit } from '@angular/core';
import { SwitchFrontToBackService } from './services/switch-front-to-back.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SpiritOfManga';
  frontOfficeOn: boolean = true;
  backOfficeOn: boolean = false;

  constructor(private frontToBack: SwitchFrontToBackService){}

  ngOnInit(){
    this.frontToBack.sendBool.subscribe(bool => {
        this.backOfficeOn = bool;
        this.backOfficeOn === true ? this.frontOfficeOn = false : this.frontOfficeOn = true;
      })
  }

}
