import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  testPost(dataForm, route): Observable<any> {
    // Take as argument the formvalue

    return this.http.post(`${route}/${dataForm}`, {responseType: 'text'});
  }

  userPost(dataForm, route): Observable<any> {
    return this.http.post(`${route}`, dataForm, {responseType: 'text'});
  }

  postMangas(dataForm, route) {
    return this.http.post(`${route}`, dataForm, {responseType: 'text'});
  }
  
  postState(state, route): Observable<any> {
    return this.http.post(`${route}/${state}`, {responseType: 'text'});
  }

  userGetEmail(mailValue, route): Observable<any> {
    return this.http.get(`${route}`, mailValue);
  };

  testPut(dataForm, route) {
    return this.http.put(`${route}`, dataForm, {responseType: 'text'});
  }

  getTypes() {
    return this.http.get(`http://localhost:4242/types/manage-types`);
  }

  getSeries() {
    return this.http.get(`http://localhost:4242/series/manage-series`);
  }

  getPacks() {
    return this.http.get(`http://localhost:4242/packs/manage-packs`, {responseType: 'text'});
  }

}