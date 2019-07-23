import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MangaDataService } from 'src/app/services/manga-data.service';

@Component({
  selector: 'app-search-state-manga-bar',
  templateUrl: './search-state-manga-bar.component.html',
  styleUrls: ['./search-state-manga-bar.component.scss']
})
export class SearchStateMangaBarComponent implements OnInit {

  mangas
  research: string;
  selectedStateManga;

  @Output() chosenManga = new EventEmitter();

  constructor(private searchMangaService : MangaDataService) { }

  ngOnInit() {

  }

  getSearchedManga(event){
    this.searchMangaService.getStatesMangaBySearch(event)
      .subscribe(mangas =>
        { this.mangas = mangas
      });
    }

  sendChosenManga(manga){
    let mangasToSend = [];
    mangasToSend.push(manga);
    this.chosenManga.emit(mangasToSend);
    this.research = '';
    this.selectedStateManga = '';
    this.mangas = [];
  }
}
