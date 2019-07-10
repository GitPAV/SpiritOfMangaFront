import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  ordersUrl = 'http://localhost:4242/statesMangas/get-mangas-order'

  constructor(private http: HttpClient) { }

  getOrderedManga(mangaId, statesId): Observable<any> {
    return this.http.get(`${this.ordersUrl}/${mangaId}/${statesId}`)
  }
  
}



