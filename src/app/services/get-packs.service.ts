import { Injectable, Output, EventEmitter } from '@angular/core';
import { Packs } from '../common/models/pack.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GetPacksService {
  packsUrl = 'http://localhost:4242/packs/manage-packs';
  packsUrl2 = 'http://localhost:4242/packs/delete-packs';
  searchUrl = 'http://localhost:4242/packs/search-packs';
  packsIdUrl = 'http://localhost:4242/packsMangas/manage-packs-mangas/';
  url = 'http://localhost:4242/packsMangas/manage-packs-mangas';

  searchByGenreUrl = 'http://localhost:4242/search/filter-packs-genres';
  searchByTypeUrl = 'http://localhost:4242/search/filter-packs-types';

  @Output() chosenPackEvent = new EventEmitter();
  
  @Output() sendPacksUpdate = new EventEmitter();
  packsToDisplay;


  constructor( private http: HttpClient) { }

  getPacks(): Observable<Packs[]> {
    return this.http.get<Packs[]>(this.packsUrl);
  }

  getPacksByID(id) {
    return this.http.get(this.packsIdUrl + id);
  }

  deletePacksByID(id) {
    const url = this.packsUrl2 + '/' +id;
    return this.http.delete(url, {responseType: 'text'});
  }

  getSearchTitle( title:string ): Observable<Packs[]> {
    return this.http.get<Packs[]>(`${this.searchUrl}/${title}`);
  }

  updatePack(pack): Observable<any> {
    return this.http.put(this.packsUrl, pack, {responseType: 'text'});
  }

  postPacks(dataForm, route) {
    return this.http.post(`${route}`, dataForm, {responseType: 'text'});
  }

  emitterPack(chosenPack) {
    this.chosenPackEvent.emit(chosenPack);
  }

  searchPacks(research) {
    this.getSearchTitle(research).subscribe( packs => {
      this.packsToDisplay = packs
      this.sendPacksUpdate.emit(this.packsToDisplay)
    })
  }

  getPacksByGenre(id): Observable<any> {
    // need to write the sql request in back
    return this.http.get(`${this.searchByGenreUrl}/${id}`)
  }

  sendPacksByGenre(id){
    // make event emitter send packs list to gallery-pack
    this.getPacksByGenre(id).subscribe( packs => {
      console.log(packs)
      this.packsToDisplay = packs
      this.sendPacksUpdate.emit(this.packsToDisplay)
    })

  }

  getPacksByType(id): Observable<any> {
    // need to write the sql request in back
    return
  }

  sendPacksByType(id) {
  // make event emitter send packs list to gallery-pack
  }

}
