import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  seriesUrl = 'http://localhost:4242/series/manage-series';

  constructor(private http: HttpClient) { }

  seriePost(dataForm, route): Observable<any> {
    return this.http.post(`${route}`, dataForm, {responseType: 'text'});
  }

  getSeries(): Observable<any> {
    return this.http.get(this.seriesUrl);
  }

  seriesPut(dataForm, route) {
    return this.http.put(`${route}`, dataForm, {responseType: 'text'});
  }
}
