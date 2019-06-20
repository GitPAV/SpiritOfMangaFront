import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatesService {
  path='http://localhost:4242/states/manage-states'

  constructor(private http: HttpClient) { }

  getStates(): Observable<any> {
    return this.http.get(`${this.path}`);
  }

  postStatesMangas(dataForm, route): Observable<any> {
    return this.http.post(`${route}`, dataForm, {responseType: 'text'});
  }

  delete(state : number){
    const url = `${this.path}/${state}`;
    console.log(url);
    return this.http.delete(url, {responseType: 'text'});
  }
}
