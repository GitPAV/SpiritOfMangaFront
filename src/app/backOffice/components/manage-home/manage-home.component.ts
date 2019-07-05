import { Component, OnInit } from '@angular/core';
import { Mangas } from 'src/app/common/models/manga.model';
import { MangaDataService } from 'src/app/services/manga-data.service';

@Component({
  selector: 'app-manage-home',
  templateUrl: './manage-home.component.html',
  styleUrls: ['./manage-home.component.scss']
})
export class ManageHomeComponent implements OnInit {
  mangasToDisplay = [];
  mangasSentToFront = localStorage.getItem("promotions") ? JSON.parse(localStorage.getItem("promotions")) : [];

  constructor(private mangaService: MangaDataService) { }

  ngOnInit() {
  }

  getChosenManga(event) {
    this.mangaService.getMangaById(event[0].id).subscribe(
      manga => {
        this.mangasToDisplay.push(manga[0])
        console.log(this.mangasToDisplay)
      }
    )
  }

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

}
