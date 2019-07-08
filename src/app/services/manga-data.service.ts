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
  mangasUrlID = 'http://localhost:4242/mangas/manage-mangas/';
  searchUrl = 'http://localhost:4242/mangas/search-mangas';
  seriePublicUrl = 'http://localhost:4242/mangas/series';
  packsMangasUrl = 'http://localhost:4242/packsMangas/manage-packs-mangas';
  mangasAwaitingUrl = 'http://localhost:4242/mangasAwaiting/manage-mangas-awaiting';
  datasForAwaitingMangasUrl = 'http://localhost:4242/mangasAwaiting/awaiting-users-mangas';

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

  getMangasById(id): Observable<any> {
    return this.http.get(this.mangasUrlID + id);
  }

  getSeriePublicByManga(title: string): Observable<any> {
    return this.http.get(`${this.seriePublicUrl}/${title}`);
  }

  delete(manga : number){
    const id = manga;
    const url = `${this.mangasUrl}/${id}`;
    return this.http.delete(url, {responseType: 'text'});
  }

  deleteMangaPack(id1, id2) {
    const idPack = id1;
    const idManga = id2;
    const url = `${this.packsMangasUrl}/${idPack}/${idManga}`;
    return this.http.delete(url, {responseType: 'text'});
  }
  sendMangaAwaiting(infos) {
    return this.http.post(this.mangasAwaitingUrl, infos, {responseType: 'text'}).toPromise()
  }

  getMangasAwaiting(): Observable<any> {
    return this.http.get<any>(this.datasForAwaitingMangasUrl);
  }

