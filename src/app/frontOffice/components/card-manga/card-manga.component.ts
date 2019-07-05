import { Component, OnInit, Input } from '@angular/core';
import { Mangas } from 'src/app/common/models/manga.model';

@Component({
  selector: 'app-card-manga',
  templateUrl: './card-manga.component.html',
  styleUrls: ['./card-manga.component.scss']
})
export class CardMangaComponent implements OnInit {
  @Input() mangasToPromote : Mangas[];

  constructor() { }

  ngOnInit() {
    console.log(this.mangasToPromote)
  }

}
