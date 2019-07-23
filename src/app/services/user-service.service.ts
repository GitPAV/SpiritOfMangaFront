import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  @Output() listenUserList = new EventEmitter()
  @Output() userConnect = new EventEmitter()

  userId: number;


  constructor(private http: HttpClient) { }

  getUserRoute = 'http://localhost:4242/users/manage-users'

  logStatus() {

    
    if ('token' in localStorage) {
      this.userConnect.emit(true); 
    } else {
       this.userConnect.emit(false); 
    }
  }


  userPost(route, dataForm ): Observable<any> {
    return this.http.post(`${route}`, dataForm, {responseType: 'text'});
  }

  userGetEmail(mailValue, route): Observable<any> {
    return this.http.get(`${route}/${mailValue}`);
  };

  getUser(route): Observable<any> {
    return this.http.get(`${route}`);
  };
  
  sendUpdatedList(route, id) {
    this.deleteUserById(route, id).subscribe( value => {
      this.getUser(this.getUserRoute).subscribe( newUsers => {
        this.listenUserList.emit(newUsers)
      })
    })
  }

  getUserDetails(route): Observable<any> {
    return this.http.get(`${route}`);
  };

  deleteUserById(route, id): Observable<any>{
    return this.http.delete(`${route}/${id}`);
  }

  getUserById(id) {
    this.userId = id;
    return this.http.get(`http://localhost:4242/users/get-users/${id}`);
  }

  modifUser(id, data){
    return this.http.put(`http://localhost:4242/users/edit-profile/${id}`, data, {responseType: 'text'});
  }

  sendUserId() {
    return this.userId;
  }
}