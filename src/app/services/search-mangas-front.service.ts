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
  filterTypesUrl = 'http://localhost:4242/search/filter-types/:id';

  constructor(private http: HttpClient) { }

  getMangas(): Observable<any> {
    this.mangasToDisplay = this.http.get(`${this.getMangasUrl}`)
    return this.mangasToDisplay
  }

  sendDatasGenre(id) {
    this.searchByGenre(id).subscribe( mangas => {
      this.mangasToDisplay = mangas
      this.sendMangas.emit(this.mangasToDisplay)
    })
  }

  searchByGenre(id): Observable<any> {
    return this.http.get(`${this.filterGenresUrl}/${id}`)
  }

  sendDatasType(id) {
    this.searchByType(id).subscribe( mangas => {
      this.mangasToDisplay = mangas
      this.sendMangas.emit(this.mangasToDisplay)
    })
  }

  searchByType(id): Observable<any> {
    return this.http.get(`${this.filterTypesUrl}/${id}`)
  }

}