import { Component, OnInit } from '@angular/core';
import { OnGoingOrderService } from '../../../services/on-going-order.service';

@Component({
  selector: 'app-on-going-order',
  templateUrl: './on-going-order.component.html',
  styleUrls: ['./on-going-order.component.scss']
})
export class OnGoingOrderComponent implements OnInit {
  finalOrderTable = []

  constructor(private finalOrderService: OnGoingOrderService) { }

  ngOnInit() {
    this.getFinalOrder()
    this.finalOrderTable;
    console.log(this.finalOrderTable)
  }

  getFinalOrder(){
    this.finalOrderService.getFinalOrder().subscribe(
      item => {
        this.finalOrderTable = item;
        console.log(item)
      }
    );
  }


}
