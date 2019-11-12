import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-manga-list-item',
  templateUrl: './manga-list-item.component.html',
  styleUrls: ['./manga-list-item.component.scss']
})
export class MangaListItemComponent {
@Input()mangaItem:any;

}
