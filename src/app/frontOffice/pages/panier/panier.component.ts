import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../../services/basket.service';
import decode from 'jwt-decode';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  itemsOrdered = [];
  firstname;
  lastname;

  constructor(private basketService: BasketService) { }

  ngOnInit() {
    this.getOrderedMangas()
    this.getToken()
  }

  getOrderedMangas() {
    let listItem = JSON.parse(sessionStorage.getItem("ordersList"))
    listItem.map( item => {
      this.basketService.getOrderedManga(item.manga, item.state).subscribe(
        manga => {
          this.itemsOrdered.push(manga)
        }
      )
    })
  }

  getToken(){
    const token = localStorage.getItem('token')
    const tokenPayload = decode(token)
    this.firstname = tokenPayload.firstname
    this.lastname = tokenPayload.lastname
  }

  removeItemStorage(i){
    let datas = JSON.parse(sessionStorage.getItem("ordersList"))
    datas = datas.splice(i)
    sessionStorage.removeItem("ordersList")
    datas = JSON.stringify(datas)
    sessionStorage.setItem("ordersList",datas)
  }

}
