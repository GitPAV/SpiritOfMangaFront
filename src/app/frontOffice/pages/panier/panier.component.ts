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
  itemsOrdered;
  firstname;
  lastname;
  prixTotal: number = 0;
  displayLink: boolean;

  constructor(private basketService: BasketService,
    private router: Router) { }

  ngOnInit() {
    this.getOrderedMangas()
    this.getToken()

  }

  getOrderedMangas() {
    let listItem = sessionStorage.getItem("ordersList")
    this.basketService.getUserChoices(listItem).subscribe(
      manga => {
        this.itemsOrdered = manga
        this.itemsOrdered.map( item => {
          this.prixTotal += item[0].prixTTC
        })

        this.basketService.basketContent.subscribe(list => {
          this.itemsOrdered = list;
        })
        this.basketService.prixTotal.subscribe( prix => {
          this.prixTotal = prix
        })
      }
    )
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

  removeItemStorage(i){
    this.basketService.removeMangas(i)
  }

  buy() {
    sessionStorage.removeItem("ordersList")
  }

}
