import { Component, OnInit } from '@angular/core';
import { MangaDataService } from '../../../services/manga-data.service';
import { Mangas } from 'src/app/common/models/manga.model';

@Component({
  selector: 'app-header-home-two',
  templateUrl: './header-home-two.component.html',
  styleUrls: ['./header-home-two.component.scss']
})
export class HeaderHomeTwoComponent implements OnInit {
  mangasOnSale: Mangas[];
  mangasToDisplay = []

  constructor(private mangaService: MangaDataService) { }

  ngOnInit() {
    this.mangaService.getPromotedManga().subscribe(
      mangas => {
        this.mangasOnSale = mangas
        this.displayRandomly()
      }
    )
  }

  displayRandomly(){
    let numMax = this.mangasOnSale.length

    while (this.mangasToDisplay.length < 5) {
      let index = Math.floor(Math.random() * numMax)
      if (!this.mangasToDisplay.includes(this.mangasOnSale[index])){
        this.mangasToDisplay.push(this.mangasOnSale[index])
      }
    }

    console.log(this.mangasToDisplay)
  }

}
