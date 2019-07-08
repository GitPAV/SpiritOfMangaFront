import { Component, OnInit } from '@angular/core';
import { MangaDataService } from '../../../services/manga-data.service';

@Component({
  selector: 'app-manage-home',
  templateUrl: './manage-home.component.html',
  styleUrls: ['./manage-home.component.scss']
})
export class ManageHomeComponent implements OnInit {
  mangasToDisplay = [];
  
  constructor(private mangaService: MangaDataService) { }

  ngOnInit() {
  }

  // Favorite mangas selection to display on home page

  // Method to get manga from search bar -> select any manga for the moment and needs improvement
  getChosenManga(event) {
    this.mangaService.getMangaById(event[0].id).subscribe(
      manga => {
        this.mangasToDisplay.push(manga[0])
      }
    )
  }

  // Method to send to home page header
  promote(id){
    this.mangaService.declareAsFavorite(id).then( res => {
      console.log(res)
    }).catch( error => {
      console.error(error);
    })
  }

  unFavorite(id) {
    this.mangaService.declareAsNotFavorite(id).then(res => {
      console.log('ce manga n\' plus favori')
    }).catch( error => {
      console.error(error);
    })
  }

  // Method to delete a sale on a manga

}
