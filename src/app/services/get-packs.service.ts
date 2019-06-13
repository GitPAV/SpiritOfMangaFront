import { Injectable } from '@angular/core';
import { Packs } from '../common/models/pack.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetPacksService {
  packsUrl = 'http://localhost:4242/packs/manage-packs';


  constructor( private http: HttpClient) { }

  getPacks(): Observable<Packs[]> {
    return this.http.get<Packs[]>(this.packsUrl); 
  }

  getSearchTitle( title:string ): Observable<Packs[]> {
    return this.http.get<Packs[]>(`${this.packsUrl}/${title}`)
  }

  updatePack(pack): Observable<any> {
    return this.http.put(this.packsUrl, pack, {responseType: 'text'});
  }

}
