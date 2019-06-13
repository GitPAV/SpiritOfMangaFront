import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MangaDataService } from 'src/app/services/manga-data.service';
import { Mangas } from 'src/app/common/models/manga.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-manga-bar',
  templateUrl: './search-manga-bar.component.html',
  styleUrls: ['./search-manga-bar.component.scss']
})
export class SearchMangaBarComponent implements OnInit {
  mangas: Mangas[];
  research: string;
  selectedManga;

  @Output() chosenManga = new EventEmitter();

  constructor(private searchMangaService : MangaDataService) { }

  ngOnInit() {

  }

  getSearchedManga(event){
    this.searchMangaService.getSearchedTitle(event)
      .subscribe(mangas =>
        { this.mangas = mangas
      });
    }

  sendChosenManga(manga){
    let mangasToSend = [];
    mangasToSend.push(manga);
    this.chosenManga.emit(mangasToSend);
    this.research = '';
    this.selectedManga = '';
    this.mangas = [];
  }
}
