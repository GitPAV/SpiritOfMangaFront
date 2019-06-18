import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  constructor(private http: HttpClient) { }

  getStates(): Observable<any> {
    return this.http.get('http://localhost:4242/states/manage-states');
  }

  postStatesMangas(dataForm, route): Observable<any> {
    return this.http.post(`${route}`, dataForm, {responseType: 'text'});
  }
}
