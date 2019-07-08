import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  userId: number;

  constructor(private http: HttpClient) { }


  userPost(dataForm, route): Observable<any> {
    return this.http.post(`${route}`, dataForm, {responseType: 'text'});
  }

  userGetEmail(mailValue, route): Observable<any> {
    return this.http.get(`${route}/${mailValue}`);
  };

  getUser(route): Observable<any> {
    return this.http.get(`${route}`);
  };

  getUserDetails(route): Observable<any> {
    return this.http.get(`${route}`);
  };

  getUserById(id) {
    this.userId = id;
  }

  sendUserId() {
    return this.userId;
  }

    /* Method put into the pack service. To delete from this service if not used elsewhere.
  postMangas(dataForm, route) {
    return this.http.post(`${route}`, dataForm, {responseType: 'text'});
  } */
  
  /* Method put into the states service. To delete from this service if not used on others branches.
  postState(state, route): Observable<any> {
    return this.http.post(`${route}/${state}`, {responseType: 'text'});
  } */

    /* Unused method to delete from this service if not called on other branches.

  testPost(dataForm, route): Observable<any> {
    // Take as argument the formvalue

    return this.http.post(`${route}/${dataForm}`, {responseType: 'text'});
  } */

  /* Methods put into other services and to delete from here.
  testPut(dataForm, route) {
    return this.http.put(`${route}`, dataForm, {responseType: 'text'});
  } */
}