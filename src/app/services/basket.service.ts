import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BasketService {
  ordersUrl = 'http://localhost:4242/statesMangas/get-mangas-order';
  @Output() basketContent = new EventEmitter();
  @Output() prixTotal = new EventEmitter();
  ordersList = [];
  prix: number = 0;

  constructor(private http: HttpClient) { }

  getOrderedManga(mangaId, statesId): Observable<any> {
    return this.http.get(`${this.ordersUrl}/${mangaId}/${statesId}`)
  }

  removeMangas(index) {
    this.ordersList = []
    this.prix = 0
    let datas = JSON.parse(sessionStorage.getItem("ordersList"))
    datas = datas.splice(index)
    sessionStorage.removeItem("ordersList")
    let len = datas.length

    datas.map(item => {
      this.getOrderedManga(item.manga, item.state).subscribe( manga => {
        this.ordersList.push(manga)
        this.prix += manga[0].prixTTC

        if (this.ordersList.length === len) {
          this.basketContent.emit(this.ordersList)
          this.prixTotal.emit(this.prix)
          datas = JSON.stringify(datas)
          sessionStorage.setItem("ordersList",datas)
        }
      })
    });
  }
  
}



