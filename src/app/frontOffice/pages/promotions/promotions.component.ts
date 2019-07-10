import { Component, OnInit } from '@angular/core';
import { MangaDataService } from '../../../services/manga-data.service';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit {

  mangas ;
  
  constructor(private mangadataservice: MangaDataService) { }

  ngOnInit() {
    this.mangadataservice.getPromotedManga().subscribe(mangas => {
      this.mangas = mangas;
      console.log(this.mangas)
    });
  }

}
