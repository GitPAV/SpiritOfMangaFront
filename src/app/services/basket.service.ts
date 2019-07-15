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
    let list;
    this.ordersList = [];
    this.prix = 0;

    let datas = JSON.parse(sessionStorage.getItem("ordersList"))
    let arr = datas
    arr.splice(index, 1)
    let len = arr.length

    sessionStorage.setItem("ordersList", JSON.stringify(arr))

    if (len > 1) {
      this.getUserChoices(sessionStorage.getItem("ordersList")).subscribe( manga => {
          list = manga
          this.basketContent.emit(list)
          list.map( item => {
            this.prix += item[0].prixTTC
          })
          this.prixTotal.emit(this.prix)

      })
    } else if (len === 1) {
      this.getOrderedManga(arr[0].manga, arr[0].state).subscribe(manga => {
        this.ordersList.push(manga)
        this.basketContent.emit(this.ordersList)
        this.prixTotal.emit(this.ordersList[0].prixTTC)
      })
    } else {
      this.basketContent.emit([])
      this.prixTotal.emit(0)
      sessionStorage.removeItem("ordersList")
    }
  }
  
}



