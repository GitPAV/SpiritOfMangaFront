import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MangaDataService {
  seriesUrl = 'series/manage-series';
  publicsUrl = 'publics/manage-publics';

  constructor(private http: HttpClient) { }

  getSeries(): Observable<any> {
    return this.http.get(this.seriesUrl);
  }

  getPublics(): Observable<any> {
    return this.http.get(this.publicsUrl);
  }

  postManga(formManga) {
    // Take as argument the formvalue
    // The http.post methode is redirected to port 4242 with proxy.conf at the root of 
    // the angular project, use 'npm start' to compile
    return this.http.post("mangas/create-manga", formManga, {responseType: 'text'})
  }
}
