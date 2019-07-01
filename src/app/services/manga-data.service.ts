import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mangas } from '../common/models/manga.model';

@Injectable({
  providedIn: 'root'
})
export class MangaDataService {
  publicsUrl = 'http://localhost:4242/publics/manage-publics';
  mangasUrl = 'http://localhost:4242/mangas/manage-mangas';
  searchUrl = 'http://localhost:4242/mangas/search-mangas';
  seriePublicUrl = 'http://localhost:4242/mangas/series';

  constructor(private http: HttpClient) { }

  getPublics(): Observable<any> {
    return this.http.get(this.publicsUrl);
  }

  postManga(formManga) {
    return this.http.post("http://localhost:4242/mangas/create-manga", formManga, {responseType: 'text'}).toPromise();
  }

  getSearchedTitle(title: string): Observable<Mangas[]> {
    return this.http.get<Mangas[]>(`${this.searchUrl}/${title}`);
  }

  updateManga(manga): Observable<any> {
    return this.http.put(this.mangasUrl, manga, {responseType: 'text'});
  }

  getMangas(): Observable<any> {
    return this.http.get(this.mangasUrl);
  }

  getSeriePublicByManga(title: string): Observable<any> {
    return this.http.get(`${this.seriePublicUrl}/${title}`);
  }

  delete(manga : number){
    const id = manga;
    const url = `${this.mangasUrl}/${id}`;
    return this.http.delete(url, {responseType: 'text'});
  }

}
