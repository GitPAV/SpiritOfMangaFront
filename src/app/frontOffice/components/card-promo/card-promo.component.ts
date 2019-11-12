import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-promo',
  templateUrl: './card-promo.component.html',
  styleUrls: ['./card-promo.component.scss']
})
export class CardPromoComponent implements OnInit {

  @Input() manga: any;
  prixPromo;
  prixTTC;
  promoValue;
  coeff;

  constructor() { }

  ngOnInit() {
    console.log(this.manga)
    this.prixTTC = this.manga.prixTTC
    this.promoValue = this.manga.promoValue

    this.coeff = 1-(this.promoValue / 100)
    this.prixPromo = this.prixTTC * this.coeff
    this.prixPromo = this.prixPromo.toFixed(2);
  }

}
