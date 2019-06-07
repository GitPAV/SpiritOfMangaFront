import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  testPost(dataForm, route): Observable<any> {
    // Take as argument the formvalue
    // The http.post methode is redirected to port 4242 with proxy.conf at the root of
    // the angular project, use 'npm start' to compile
    
    return this.http.post(`${route}`, dataForm, {responseType: 'text'});

    console.log('dataform', dataForm);
    console.log('route', route);

  };

  testPut(dataForm, route) {
    // Take as argument the formvalue
    // The http.post methode is redirected to port 4242 with proxy.conf at the root of
    // the angular project, use 'npm start' to compile

    console.log('dataform', dataForm);
    console.log('route', route);


    return this.http.put(`${route}`, dataForm, {responseType: 'text'});
  };

    getTypes() {
      return this.http.get(`http://localhost:4242/types/manage-types`);
    }

    getSeries()  {
      return this.http.get(`http://localhost:4242/series/manage-series`);
    }

    putSerie() {
      
    }



}