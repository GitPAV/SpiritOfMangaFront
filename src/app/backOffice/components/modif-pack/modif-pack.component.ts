import { Component, OnInit, } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { GetPacksService } from 'src/app/services/get-packs.service';

@Component({
  selector: 'app-modif-pack',
  templateUrl: './modif-pack.component.html',
  styleUrls: ['./modif-pack.component.scss']
})

export class ModifPackComponent implements OnInit {

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
    prixPromo: [],
    comment: [],
    notrePrix: ['', Validators.required],
    tomes: [],
  });

  ngOnInit() {
    this.packsService.chosenPackEvent.subscribe(dataArray => {
      const data = dataArray[0];
      this.createPackForm.patchValue({
        id: data.id,
        namePack: data.namePack,
        photoPack: data.photoPack,
        resumePack: data.resumePack,
        stock: data.stock,
        weight: data.weight,
        prixPublic: data.prixPublic,
        promo: data.promo,
        prixPromo: data.prixPromo,
        comment: data.comment,
        notrePrix: data.notrePrix,
        tomes: data.tomes,
      });
    });

  }

  deletePack() {
    event.preventDefault();
    const packId = this.createPackForm.value.id;
    this.packsService.deletePacksByID(packId).subscribe();
    this.createPackForm.reset();
  }

  onSubmit() {
    this.packsService.updatePack(this.createPackForm.value).subscribe();
    this.createPackForm.reset();
  }

}
