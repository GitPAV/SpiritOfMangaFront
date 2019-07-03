import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnGoingOrderService {
  finalOrderUrl = 'http://localhost:4242/finalOrder/manage-final-order';
  mangaFinalOrderUrl= 'http://localhost:4242/finalOrder/manage-final-order-manga';

  constructor(private http: HttpClient) { }

  getFinalOrder(): Observable<any> {
    return this.http.get(this.finalOrderUrl)
  }

  getMangaFinalOrder(): Observable<any> {
    return this.http.get(this.mangaFinalOrderUrl)
  }

}



