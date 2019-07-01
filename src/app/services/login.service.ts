import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../common/models/user.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginUrl = 'http://localhost:4242/users/login';
  protectedUrl = 'http://localhost:4242/users/protected';
  getUserByMail = 'http://localhost:4242/users/get-users';
  isLoggedIn = false;
  userConnectedMail: string;

  constructor(private http: HttpClient, private router: Router) { }

  loginPost(userForm) {
    console.log(userForm)
    this.userConnectedMail = userForm.email
    console.log(this.userConnectedMail)
    return this.http.post(this.loginUrl, userForm, {responseType: 'text'}).toPromise();
  }

  protectPost() {
    const token = JSON.parse(localStorage.getItem("token")).token;
    const header = {headers: {'Authorization' : `Bearer ${token}`}}

    return this.http.post(this.protectedUrl, token, header)
      .toPromise();
  }

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

  getUserConnected(): Observable<User>{
    return this.http.get<User>(`${this.getUserByMail}/${this.userConnectedMail}`)
  }

}
