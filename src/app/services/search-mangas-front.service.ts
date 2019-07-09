import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchMangasFrontService {
  mangasToDisplay: Observable<any>;
  @Output() sendMangas = new EventEmitter()
  getMangasUrl = 'http://localhost:4242/mangas/manage-mangas';
  filterGenresUrl = 'http://localhost:4242/search/filter-genres';

  constructor(private http: HttpClient) { }

  getMangas(): Observable<any> {
    this.mangasToDisplay = this.http.get(`${this.getMangasUrl}`)
    return this.mangasToDisplay
  }

  sendDatas(id) {
    this.searchByGenre(id).subscribe( mangas => {
      this.mangasToDisplay = mangas
      this.sendMangas.emit(this.mangasToDisplay)
    })
  }

  searchByGenre(id): Observable<any> {
    return this.http.get(`${this.filterGenresUrl}/${id}`)
  }

}