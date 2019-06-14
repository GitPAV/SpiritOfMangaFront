import { Component, OnInit } from '@angular/core';
import { Mangas } from 'src/app/common/models/manga.model';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stock-manga',
  templateUrl: './stock-manga.component.html',
  styleUrls: ['./stock-manga.component.scss']
})
export class StockMangaComponent implements OnInit {
  mangaTitle: Mangas[];

  stockForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.stockForm = this.fb.group({
      states_id:['',Validators.required],
      mangas_id:['',Validators.required],
      commentaire:[''],
      stock:['',Validators.required],
      promo:['',Validators.required],
      promoValue:[''],
      prixHT:['',Validators.required],
      TVA:['',Validators.required],
      prixTTC:['',Validators.required],
    })
  }

  getTheChosenManga(event){   
    this.mangaTitle = event;
    //console.log(this.mangaTitle)
  }



}
