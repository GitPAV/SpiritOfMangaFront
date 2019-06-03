import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MangaDataService } from 'src/app/services/manga-data.service';

@Component({
  selector: 'app-search-manga-bar',
  templateUrl: './search-manga-bar.component.html',
  styleUrls: ['./search-manga-bar.component.scss']
})
export class SearchMangaBarComponent implements OnInit {
  mangas=[];
  searchTitle: string;

  @Output() chosenManga = new EventEmitter();

  constructor(private searchMangaService : MangaDataService) { }

  ngOnInit() {
  }

  getSearchedManga(){
    console.log(this.searchTitle);
    this.searchMangaService.getSearchedTitle(this.searchTitle)
      .subscribe(mangas =>
        this.mangas = mangas);
        console.log(this.mangas);
  }

  sendChosenManga(manga){
    this.chosenManga.emit(manga);

  }
}
