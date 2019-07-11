import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-button',
  templateUrl: './order-button.component.html',
  styleUrls: ['./order-button.component.scss']
})
export class OrderButtonComponent implements OnInit {
  @Input() mangaOrderedId: number;
  @Input() stateId: number;
  ordersList = sessionStorage.getItem('ordersList') ? JSON.parse(sessionStorage.getItem('ordersList')) : [];

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.mangaOrderedId)
  }

  checkLogin(mangaId, statesId){
    if(localStorage.getItem('token')){
     this.saveItem(mangaId, statesId)
    } else {
      this.router.navigate(['front/user-login'])
    }
  }

  saveItem(mangaId, statesId) {
    let datas = {manga: mangaId, state: statesId}
    this.ordersList.push(datas)
    this.saveToLocalStorage()
  }

  saveToLocalStorage() {
    sessionStorage.setItem('ordersList', JSON.stringify(this.ordersList));
}


}
