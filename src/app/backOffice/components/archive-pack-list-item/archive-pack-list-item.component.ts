import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-archive-pack-list-item',
  templateUrl: './archive-pack-list-item.component.html',
  styleUrls: ['./archive-pack-list-item.component.scss']
})
export class ArchivePackListItemComponent implements OnInit {

  @Input()packItem:any;

  constructor() { }

  ngOnInit() {
  }

}
