import { Component, OnInit } from '@angular/core';
import { Mangas } from 'src/app/common/models/manga.model';
import { MangaDataService } from '../../../services/manga-data.service';

@Component({
  selector: 'app-header-home-one',
  templateUrl: './header-home-one.component.html',
  styleUrls: ['./header-home-one.component.scss']
})
export class HeaderHomeOneComponent implements OnInit {

  mangasToPromote : Mangas[];
  // mangasToDisplay = []

  constructor(private mangaService: MangaDataService) { }

  ngOnInit() {
    this.mangaService.getFavorites().subscribe( mangas => {
      this.mangasToPromote = mangas
     // this.displayRandomly()
    })

  }

  // displayRandomly(){
  //   let numMax = this.mangasToPromote.length

  //   while (this.mangasToDisplay.length < 5) {
  //     let index = Math.floor(Math.random() * numMax)
  //     if (!this.mangasToDisplay.includes(this.mangasToPromote[index])){
  //       this.mangasToDisplay.push(this.mangasToPromote[index])
  //     }
  //   }

  //   console.log(this.mangasToDisplay)
  // }

}
