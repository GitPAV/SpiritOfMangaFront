import { Component, OnInit } from '@angular/core';
import { SwitchFrontToBackService } from './services/switch-front-to-back.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SpiritOfManga';
  frontOfficeOn: boolean;
  backOfficeOn: boolean;

  constructor(private frontToBack: SwitchFrontToBackService){}

  ngOnInit(){
    this.frontOfficeOn = true
    this.backOfficeOn = false
  }

  
  


}
