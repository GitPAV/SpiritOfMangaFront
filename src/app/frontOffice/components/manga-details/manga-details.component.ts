import { Component, OnInit } from '@angular/core';
import { MangaDataService } from '../../../services/manga-data.service';


@Component({
  selector: 'app-manga-details',
  templateUrl: './manga-details.component.html',
  styleUrls: ['./manga-details.component.scss']
})
export class MangaDetailsComponent implements OnInit {

  mangas = [];
  i = 0; // remplacer 0 par l'ID du manga selectionné
  choosenManga = [];

  constructor( private mangadataservice: MangaDataService) { }

  ngOnInit() {
    this.mangadataservice.getMangas().subscribe(mangas => {
      this.mangas = mangas;
      // Change la value du I par l'ID du manga selectionné
      this.choosenManga = this.mangas[this.i];
      console.log(this.choosenManga);
    });

  }

}
