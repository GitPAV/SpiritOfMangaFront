import { Component, OnInit, Input } from '@angular/core';
import { Packs } from '../../../common/models/pack.model';
import { Validators, FormBuilder } from '@angular/forms';




@Component({
  selector: 'app-modif-pack',
  templateUrl: './modif-pack.component.html',
  styleUrls: ['./modif-pack.component.scss']
})
export class ModifPackComponent implements OnInit {
@Input()  infoPack: Packs

  constructor(private fb: FormBuilder) { }

  createPackForm = this.fb.group({
    namePack: ['', Validators.required],
    photoPack: ['', Validators.required],
    resumePack: ['', Validators.required],
    stock: ['', Validators.required],
    weight: ['', Validators.required],
    prixPublic: ['', Validators.required],
    promo: ['', Validators.required],
    prixPromo: ['', Validators.required],
    statesPack_id: ['', Validators.required],
    notrePrix: ['', Validators.required],
    tomes: ['', Validators.required],
  });
  
  ngOnInit() {
    this.createPackForm.setValue({
      namePack: this.infoPack.namePack,
      photoPack: this.infoPack.photoPack,
      resumePack: this.infoPack.resumePack,
      stock: this.infoPack.stock,
      weight: this.infoPack.weight,
      prixPublic: this.infoPack.prixPublic,
      promo: this.infoPack.promo,
      prixPromo: this.infoPack.prixPromo,
      statesPack_id: this.infoPack.statesPack_id,
      notrePrix: this.infoPack.notrePrix,
      tomes: this.infoPack.tomes,
    });
  }

  getPack(){

  }

}
