import { Component, OnInit } from '@angular/core';
import { OnGoingOrderService } from '../../../services/on-going-order.service';

@Component({
  selector: 'app-on-going-order',
  templateUrl: './on-going-order.component.html',
  styleUrls: ['./on-going-order.component.scss']
})
export class OnGoingOrderComponent implements OnInit {
  finalOrderTable = [];
  mangaFinalOrderTable = [];

  constructor(private finalOrderService: OnGoingOrderService) { }

  ngOnInit() {
    this.getFinalOrder();
    this.getMangaFinalOrder();
  }

  getFinalOrder(){
    this.finalOrderService.getFinalOrder().subscribe(
      item => {
        this.finalOrderTable = item;
        console.log(this.finalOrderTable)
        })
      }

  getMangaFinalOrder(){
    this.finalOrderService.getMangaFinalOrder().subscribe(
      item => {
        this.mangaFinalOrderTable = item;
        console.log(this.mangaFinalOrderTable)
      }
    )
  }


}
