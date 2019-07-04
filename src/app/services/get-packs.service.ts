import { Injectable } from '@angular/core';
import { Packs } from '../common/models/pack.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetPacksService {
  packsUrl = 'http://localhost:4242/packs/manage-packs';
  searchUrl ='http://localhost:4242/packs/search-packs';
  url = 'http://localhost:4242/packsMangas/manage-packs-mangas';



  constructor( private http: HttpClient) { }

  getPacks(): Observable<Packs[]> {
    return this.http.get<Packs[]>(this.packsUrl); 
  }

  getSearchTitle( title:string ): Observable<Packs[]> {
    return this.http.get<Packs[]>(`${this.searchUrl}/${title}`)
  }

  updatePack(pack): Observable<any> {
    console.log(pack)
    return this.http.put(this.packsUrl, pack, {responseType: 'text'});
  }

  postPacks(dataForm, route) {
    return this.http.post(`${route}`, dataForm, {responseType: 'text'});
  }

}
