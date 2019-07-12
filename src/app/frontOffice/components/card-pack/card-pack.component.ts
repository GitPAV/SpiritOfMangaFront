import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-pack',
  templateUrl: './card-pack.component.html',
  styleUrls: ['./card-pack.component.scss']
})
export class CardPackComponent implements OnInit {

  @Input() pack: any;
  
  constructor() { }
  
  ngOnInit() {
  }

}
