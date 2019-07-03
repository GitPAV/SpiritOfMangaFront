import { Injectable, Output, EventEmitter } from '@angular/core';
import { Packs } from '../common/models/pack.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class GetPacksService {
  packsUrl = 'http://localhost:4242/packs/manage-packs/';
  searchUrl = 'http://localhost:4242/packs/search-packs';
  packsIdUrl = 'http://localhost:4242/packsMangas/manage-packs-mangas/'
  url = 'http://localhost:4242/packsMangas/manage-packs-mangas';

  @Output() chosenPackEvent = new EventEmitter();


  constructor( private http: HttpClient) { }

  getPacks(): Observable<Packs[]> {
    return this.http.get<Packs[]>(this.packsUrl);
  }

  getPacksByID(id) {
    return this.http.get(this.packsIdUrl + id);
  }

  deletePacksByID(id) {
    console.log('IM INNNN' + id);
    
    return this.http.delete(this.packsUrl + id, {responseType: 'text'});
  }

  getSearchTitle( title:string ): Observable<Packs[]> {
    return this.http.get<Packs[]>(`${this.searchUrl}/${title}`);
  }

  updatePack(pack): Observable<any> {
    console.log(pack)
    return this.http.put(this.packsUrl, pack, {responseType: 'text'});
  }

  postPacks(dataForm, route) {
    return this.http.post(`${route}`, dataForm, {responseType: 'text'});
  }

  emitterPack(chosenPack) {
    this.chosenPackEvent.emit(chosenPack);
  }

}
