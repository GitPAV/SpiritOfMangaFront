import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../../services/basket.service';
import decode from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  itemsOrdered = [];
  firstname;
  lastname;
  prixTotal: number = 0;

  constructor(private basketService: BasketService,
    private router: Router) { }

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
          this.prixTotal += manga[0].prixTTC
          this.basketService.basketContent.subscribe(list => {
            this.itemsOrdered = list;
          })
        }
      )
    })
  }

  getToken(){
    const token = localStorage.getItem('token')

    if (token) {
      const tokenPayload = decode(token)
      this.firstname = tokenPayload.firstname
      this.lastname = tokenPayload.lastname
    } else {
      this.router.navigate(['front/user-login'])
    }
  }

// Put logic into a service and make itemsOrdered subscribe to an event emitter
  removeItemStorage(i){
    this.basketService.removeMangas(i)
    console.log(this.itemsOrdered)
  }

  buy() {
    sessionStorage.removeItem("ordersList")
  }

}