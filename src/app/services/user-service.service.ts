import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  /* Unused method to delete from this service if not called on other branches.

  testPost(dataForm, route): Observable<any> {
    // Take as argument the formvalue

    return this.http.post(`${route}/${dataForm}`, {responseType: 'text'});
  } */

  userPost(dataForm, route): Observable<any> {
    return this.http.post(`${route}`, dataForm, {responseType: 'text'});
  }

  /* Method put into the pack service. To delete from this service if not used elsewhere.
  postMangas(dataForm, route) {
    return this.http.post(`${route}`, dataForm, {responseType: 'text'});
  } */
  
  /* Method put into the states service. To delete from this service if not used on others branches.
  postState(state, route): Observable<any> {
    return this.http.post(`${route}/${state}`, {responseType: 'text'});
  } */

  userGetEmail(mailValue, route): Observable<any> {
    return this.http.get(`${route}/${mailValue}`);
  };

  /* Methods put into other services and to delete from here.
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
  } */

}