import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-archive-manga-list-item',
  templateUrl: './archive-manga-list-item.component.html',
  styleUrls: ['./archive-manga-list-item.component.scss']
})
export class ArchiveMangaListItemComponent implements OnInit {
@Input()mangaItem:any;
  constructor() { }

  ngOnInit() {
    console.log(this.mangaItem)
  }

}
