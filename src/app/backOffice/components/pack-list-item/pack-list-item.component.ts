import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pack-list-item',
  templateUrl: './pack-list-item.component.html',
  styleUrls: ['./pack-list-item.component.scss']
})
export class PackListItemComponent {

  @Input()packItem:any;

}
