import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnGoingOrderService {
  finalOrderUrl = 'http://localhost:4242/finalOrder/manage-final-order';

  constructor(private http: HttpClient) { }

  getFinalOrder(): Observable<any> {
    return this.http.get(this.finalOrderUrl)
  }

}



