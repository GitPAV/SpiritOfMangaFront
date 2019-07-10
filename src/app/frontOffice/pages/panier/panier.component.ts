import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../../services/basket.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  itemsOrdered = [];

  constructor(private basketService: BasketService) { }

  ngOnInit() {
    this.getOrderedMangas()
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




}
