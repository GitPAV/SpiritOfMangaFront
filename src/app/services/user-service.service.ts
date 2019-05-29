import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  testPost(dataForm, route) {
    // Take as argument the formvalue
    // The http.post methode is redirected to port 4242 with proxy.conf at the root of
    // the angular project, use 'npm start' to compile

    console.log('dataform', dataForm);
    console.log('route', route);
    

    return this.http.post(`${route}`, dataForm, {responseType: 'text'});

  };

  // testPost1(dataForm) {
  //   // Take as argument the formvalue
  //   // The http.post methode is redirected to port 4242 with proxy.conf at the root of
  //   // the angular project, use 'npm start' to compile

  //   console.log('dataform', dataForm);

  //   if (){
  //   return this.http.post("users/create-profile", dataForm, {responseType: 'text'});  //series
  //   } else if () {
  //     return this.http.post("users/create-profile", dataForm, {responseType: 'text'}); //manga
  //   } else {
  //     return this.http.post("users/create-profile", dataForm, {responseType: 'text'}); //pack
  //   }
  // };

}