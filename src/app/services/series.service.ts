import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private http: HttpClient) { }

  seriePost(dataForm, route): Observable<any> {
    return this.http.post(`${route}`, dataForm, {responseType: 'text'});
  }
}
