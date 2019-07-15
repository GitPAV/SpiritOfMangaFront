import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../common/models/user.model';
import decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginUrl = 'http://localhost:4242/users/login';
  protectedUrl = 'http://localhost:4242/users/protected';
  getUserByMail = 'http://localhost:4242/users/display-user';
  isLoggedIn : boolean;
  userConnectedMail: string;

  constructor(private http: HttpClient, private router: Router) { }

  loginPost(userForm) {
    this.userConnectedMail = userForm.email
    return this.http.post(this.loginUrl, userForm, {responseType: 'text'}).toPromise();
  }

  protectPost() {
    const token = JSON.parse(localStorage.getItem("token")).token;
    const header = {headers: {'Authorization' : `Bearer ${token}`}}

    return this.http.post(this.protectedUrl, token, header)
      .toPromise();
  }

  login() {
    return true;
  }

  logout() {
    this.isLoggedIn = false;
  }

  getUserConnected(): Observable<User>{
    const token = localStorage.getItem('token')
    const tokenPayload = decode(token)
    console.log(tokenPayload.email)
    return this.http.get<User>(`${this.getUserByMail}/${tokenPayload.email}`)
  }

}
