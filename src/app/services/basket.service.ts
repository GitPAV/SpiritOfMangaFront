import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BasketService {
  ordersUrl = 'http://localhost:4242/statesMangas/get-mangas-order';
  userChoicesUrl = 'http://localhost:4242/statesMangas/get-user-choices';
  @Output() basketContent = new EventEmitter();
  @Output() prixTotal = new EventEmitter();
  ordersList = [];
  prix: number = 0;

  constructor(private http: HttpClient) { }

  getOrderedManga(mangaId, statesId): Observable<any> {
    return this.http.get(`${this.ordersUrl}/${mangaId}/${statesId}`)
  }

  getUserChoices(datasIds): Observable<any> {
    return this.http.get(`${this.userChoicesUrl}?datas=${datasIds}`)
  }

  removeMangas(index) {
    this.ordersList = []
    this.prix = 0
    let datas = JSON.parse(sessionStorage.getItem("ordersList"))
    sessionStorage.removeItem("ordersList")
    datas = datas.splice(index)
    let len = datas.length
    sessionStorage.setItem("ordersList", JSON.stringify(datas))

      this.getUserChoices(sessionStorage.getItem("ordersList")).subscribe( manga => {
        this.ordersList = manga

        if (this.ordersList.length === len) {
          this.basketContent.emit(this.ordersList)
          this.ordersList.map( item => {
            this.prix += item[0].prixTTC
          })
          this.prixTotal.emit(this.prix)

        } else {
          this.basketContent.emit([])
          this.prixTotal.emit(0)
          sessionStorage.removeItem("ordersList")
        }
    });
  }
  
}



