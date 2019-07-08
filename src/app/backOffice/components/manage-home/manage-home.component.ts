import { Component, OnInit } from '@angular/core';
import { MangaDataService } from '../../../services/manga-data.service';

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
