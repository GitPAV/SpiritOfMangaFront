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
    this.userConnect.subscribe(value => {
      console.log(value)
    });
    
    if ('token' in localStorage) {
      this.userConnect.emit(true); 
      console.log("token")
    } else {
      console.log("no token")
       this.userConnect.emit(false); 
    }
  }

  // logStatus() {
  //   if ('token' in localStorage) {
  //     console.log("bien")
  //     return this.userState = true; 
  //   } else {
  //     console.log("pasbien")
  //     return this.userState = false; 
  //   }
  // }

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

  getUserById(id) {
    this.userId = id;
  }

  sendUserId() {
    return this.userId;
  }

  deleteUserById(route, id): Observable<any>{
    return this.http.delete(`${route}/${id}`);
  }
}