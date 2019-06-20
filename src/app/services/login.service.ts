import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginUrl = 'http://localhost:4242/users/login';
  protectedUrl = 'http://localhost:4242/users/protected';
  isLoggedIn = false;

  constructor(private http: HttpClient) { }

  loginPost(userForm) {
    return this.http.post(this.loginUrl, userForm, {responseType: 'text'}).toPromise();
  }

  protectPost() {
    const token = JSON.parse(localStorage.getItem("token")).token;
    const header = {headers: {'Authorization' : `Bearer ${token}`}}
    console.log(token);
    console.log(header);

    return this.http.post(this.protectedUrl, token, header)
      .toPromise();
  }

  login() {
    this.isLoggedIn = true;
    console.log(this.isLoggedIn)
  }

  logout() {
    this.isLoggedIn = false;
  }

}
