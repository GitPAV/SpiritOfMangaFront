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
}
