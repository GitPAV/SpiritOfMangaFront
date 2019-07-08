import { Component, OnInit } from '@angular/core';
import { MangaDataService } from '../../../services/manga-data.service';

@Component({
  selector: 'app-manage-home',
  templateUrl: './manage-home.component.html',
  styleUrls: ['./manage-home.component.scss']
})
export class ManageHomeComponent implements OnInit {
  mangasToDisplay = [];
<<<<<<< HEAD
  
=======
  mangasSentToFront = localStorage.getItem("promotions") ? JSON.parse(localStorage.getItem("promotions")) : [];

>>>>>>> dev
  constructor(private mangaService: MangaDataService) { }

  ngOnInit() {
  }

<<<<<<< HEAD
  // Favorite mangas selection to display on home page

  // Method to get manga from search bar -> select any manga for the moment and needs improvement
=======
>>>>>>> dev
  getChosenManga(event) {
    this.mangaService.getMangaById(event[0].id).subscribe(
      manga => {
        this.mangasToDisplay.push(manga[0])
      }
    )
  }

<<<<<<< HEAD
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


=======
  promote(id){
    // method to post into BDD ?
    this.mangaService.getMangaById(id).subscribe(
      manga => {
        this.mangasSentToFront.push(manga[0])
        localStorage.setItem("promotions", JSON.stringify(this.mangasSentToFront))
        console.log(localStorage.getItem("promotions"))
      }
    )
  }

>>>>>>> dev
}
