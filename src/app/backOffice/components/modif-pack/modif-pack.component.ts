import { Component, OnInit, Input } from '@angular/core';
import { Packs } from '../../../common/models/pack.model';
import { Validators, FormBuilder } from '@angular/forms';
import { GetPacksService } from 'src/app/services/get-packs.service';

@Component({
  selector: 'app-modif-pack',
  templateUrl: './modif-pack.component.html',
  styleUrls: ['./modif-pack.component.scss']
})
export class ModifPackComponent implements OnInit {
@Input()  infoPack: Packs

  constructor(
    private fb: FormBuilder,
    private packsService: GetPacksService
    ) { }

  createPackForm = this.fb.group({
    id: [''],
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
    console.log(this.infoPack)
    this.createPackForm.patchValue({
      id: this.infoPack.id,
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

  onSubmit(){
 this.packsService.updatePack(this.createPackForm.value).subscribe()
 this.createPackForm.reset()
  }

}
