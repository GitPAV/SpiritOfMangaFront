import { Component, OnInit } from '@angular/core';
import { Mangas } from 'src/app/common/models/manga.model';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { StatesService } from 'src/app/services/states.service';

@Component({
  selector: 'app-stock-manga',
  templateUrl: './stock-manga.component.html',
  styleUrls: ['./stock-manga.component.scss']
})
export class StockMangaComponent implements OnInit {
  mangaTitle: Mangas[];
  stockForm: FormGroup;
  stockUrl = 'http://localhost:4242/statesMangas/manage-states-stock';
  states = [];
  promoTable=[
    {name:"oui"},
    {name:"non"}
  ];
  promoCheck = false;
  mangaToAdd;

  constructor(private fb: FormBuilder, 
    private statesService: StatesService) { }

  ngOnInit() {
    this.stockForm = this.fb.group({
      states_id:[''],
      mangas_id:[''],
      commentaire:[''],
      stock:['',Validators.required],
      promo:['',Validators.required],
      promoValue:[''],
      prixHT:['',Validators.required],
      TVA:['',Validators.required],
      prixTTC:['',Validators.required],
    })
    
    /* default TVA value */
    this.stockForm.get('TVA').patchValue(5.5);

    this.statesService.getStates()
      .subscribe( states => {
        this.states = states;
      }
    )
  }

  getTheChosenManga(event){   
    this.mangaTitle = event;
  }

  onSubmit(){
    /* setting boolean type */
    this.stockForm.get('promo').value === "oui" ? this.stockForm.get('promo').patchValue(true) : this.stockForm.get('promo').patchValue(false);

    /* setting manga id before sending to DB*/
    this.stockForm.get("mangas_id").patchValue(this.mangaTitle[0].id);

    /* converting states_id from string to boolean */
    this.mangaToAdd = this.stockForm.value;
    this.mangaToAdd.states_id = +this.mangaToAdd.states_id;

    this.statesService.postStatesMangas(this.mangaToAdd, this.stockUrl).subscribe();
    this.stockForm.reset();
  }

  /* Method to display promo field if wanted */
  applyPromo(){
    this.stockForm.get('promo').value === "oui" ? this.promoCheck = true : this.promoCheck = false;
  }

  /* Method to directly calculate full price */
  getPrice(){
    let tvaToEuros = this.stockForm.get('prixHT').value * this.stockForm.get('TVA').value / 100;
    this.stockForm.get('prixTTC').patchValue((this.stockForm.get('prixHT').value + tvaToEuros).toFixed(2));
  }

  /* Method to get the price with the promotion */ 
  getPromoPrice(){
   let priceWithPromo = this.stockForm.get('prixTTC').value * this.stockForm.get('promoValue').value / 100;
   this.stockForm.get('prixTTC').patchValue((this.stockForm.get('prixTTC').value - priceWithPromo));
  }

}
