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
  prixPromo;
  prixTTC;
  promoValue;
  coeff;


  constructor(private mangaService: MangaDataService) { }

  ngOnInit() {
    this.mangaService.getPromotedManga().subscribe(
      mangas => {
        this.mangasOnSale = mangas
        this.displayRandomly()

    // this.prixTTC = this.mangasOnSale.value.prixTTC
    // this.promoValue = this.manga.promoValue

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
  for (let i = 0 ; i < this.mangasToDisplay.length; i++){
    let selectManga = this.mangasToDisplay[i];
    this.prixTTC = selectManga.prixTTC;
    this.promoValue = selectManga.promoValue
    this.coeff = 1-(this.promoValue / 100)
    this.prixPromo = this.prixTTC * this.coeff
    this.prixTTC = this.prixPromo.toFixed(2);
    selectManga.prixTTC = this.prixTTC;
  }      
    }
    

  }


