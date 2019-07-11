import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  ordersUrl = 'http://localhost:4242/statesMangas/get-mangas-order';
  @Output() basketContent = new EventEmitter();
  ordersList = [];

  constructor(private http: HttpClient) { }

  getOrderedManga(mangaId, statesId): Observable<any> {
    return this.http.get(`${this.ordersUrl}/${mangaId}/${statesId}`)
  }

  removeMangas(index) {
    let datas = JSON.parse(sessionStorage.getItem("ordersList"))
    datas = datas.splice(index)
    sessionStorage.removeItem("ordersList")

    datas.map(item => {
      this.getOrderedManga(item.manga, item.state).subscribe( manga => {
        this.ordersList.push(manga)
        // push everything before emitting maybe in the back ?
        this.basketContent.emit(this.ordersList)
        this.ordersList = []
      })
    });

    datas = JSON.stringify(datas)
    sessionStorage.setItem("ordersList",datas)
  }
  
}



