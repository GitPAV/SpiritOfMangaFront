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
  mangasStatesUrl = 'http://localhost:4242/statesMangas/manage-states-mangas/';
  searchUrl = 'http://localhost:4242/mangas/search-mangas';
  searchStatesManga = 'http://localhost:4242/statesMangas/search-statesmangas'
  seriePublicUrl = 'http://localhost:4242/mangas/series';
  packsMangasUrl = 'http://localhost:4242/packsMangas/manage-packs-mangas';
  mangasAwaitingUrl = 'http://localhost:4242/mangasAwaiting/manage-mangas-awaiting';
  datasForAwaitingMangasUrl = 'http://localhost:4242/mangasAwaiting/awaiting-users-mangas';
  mangasPromotedUrl = 'http://localhost:4242/statesMangas/get-promotions';
  setAsFavoriteUrl = 'http://localhost:4242/statesMangas/promote-on-home';
  setAsUnFavoriteUrl = 'http://localhost:4242/statesMangas/unpromote-on-home';

  constructor(private http: HttpClient) { }

  getPublics(): Observable<any> {
    return this.http.get(this.publicsUrl);
  }

  postManga(formManga) {
    return this.http.post("http://localhost:4242/mangas/create-manga", formManga, {responseType: 'text'}).toPromise();
  }
  
  getMangas(): Observable<any> {
    return this.http.get(this.mangasUrl);
  }

  getSearchedTitle(title: string): Observable<Mangas[]> {
    return this.http.get<Mangas[]>(`${this.searchUrl}/${title}`);
  }

  getMangaById(id: number): Observable<Mangas[]> {
    return this.http.get<Mangas[]>(`${this.mangasUrl}/${id}`);
  }

  getMangasStatesById(id: number){
    return this.http.get(this.mangasStatesUrl + id);
  }

  updateManga(manga): Observable<any> {
    return this.http.put(this.mangasUrl, manga, {responseType: 'text'});
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

   // METHODS FOR THE DISPONIBILITY ALERTS FEATURE
  sendMangaAwaiting(infos) {
    return this.http.post(this.mangasAwaitingUrl, infos, {responseType: 'text'}).toPromise()
  }

  getMangasAwaiting(): Observable<any> {
    return this.http.get<any>(this.datasForAwaitingMangasUrl);
  }

  // METHODS TO DISPLAY MANGAS ON HOME PAGE
  getPromotedMangaById(id: number): Observable<any> {
    return this.http.get<any>(`${this.mangasPromotedUrl}/${id}`);
  }

  getPromotedManga(): Observable<[]> {
    return this.http.get<[]>(`${this.mangasPromotedUrl}`);
  }

  // Method to set a manga as favorite in DB and display randomly in first home page header
  declareAsFavorite(id){
    return this.http.put(`${this.setAsFavoriteUrl}/${id}`, {responseType: 'text'}).toPromise()
  }
  // Method to unfavorite a manga and not display it in home page 
  declareAsNotFavorite(id){
    let route = `${this.setAsUnFavoriteUrl}/${id}`
    console.log(route)
    return this.http.put(route, {responseType: 'text'}).toPromise()
  }
  // Get mangas from DB declared as favorite 
  getFavorites(): Observable<any> {
    return this.http.get(`http://localhost:4242/statesMangas/get-favorites`);
  }

  //Search in statesManga
  getStatesMangaBySearch(title: string):Observable<any> {
    return this.http.get(`${this.searchStatesManga}/${title}`)
  }

}