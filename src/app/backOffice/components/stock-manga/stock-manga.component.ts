import { Component, OnInit } from '@angular/core';
import { Mangas } from 'src/app/common/models/manga.model';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
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
    {name:"oui",boolean:true},
    {name:"non",boolean:false}
  ]

  constructor(private fb: FormBuilder, 
    private dbService: UserServiceService, 
    private statesService: StatesService) { }

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
    this.stockForm.get("mangas_id").patchValue(this.mangaTitle[0].id);
    console.log(this.stockForm.value);
    this.dbService.testPost(this.stockForm.value, this.stockUrl);
    this.stockForm.reset();
  }

  // getTheTVA(){
  //   this.TVA = 5
  //   prixHt * TVA / 100
  // }

}
