import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginUrl = 'http://localhost:4242/users/login';
  protectedUrl = 'http://localhost:4242/users/protected';

  constructor(private http: HttpClient) { }

  loginPost(userForm) {
    return this.http.post(this.loginUrl, userForm, {responseType: 'text'}).toPromise();
  }

  protectPost(userForm) {
    return this.http.post(this.protectedUrl, userForm, {responseType: 'text'}).toPromise();
  }

}
