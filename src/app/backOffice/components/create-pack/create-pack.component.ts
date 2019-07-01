import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { StatesService } from 'src/app/services/states.service';
import { GetPacksService } from 'src/app/services/get-packs.service';
import { Packs } from 'src/app/common/models/pack.model';


@Component({
  selector: 'app-create-pack',
  templateUrl: './create-pack.component.html',
  styleUrls: ['./create-pack.component.scss']
})
export class CreatePackComponent implements OnInit {

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

  createMangasPackForm = this.fb.group({
    packs_id: ['', Validators.required],
    mangas_id: ['', Validators.required],
  });

  states = [];
  chosenManga = [];
  packs : Packs[];
  id;
  idManga;

  constructor(private fb: FormBuilder, 
    private packService: GetPacksService,
    private statesService: StatesService) { }

  ngOnInit() {

    this.statesService.getStates()
      .subscribe(states => {
        this.states = states;
      });

    this.packService.getPacks()
      .subscribe(packs => {
        this.packs = packs;
        console.log(this.packs);
      });
  }


  getChosenManga(event) {
    this.chosenManga = event;
    console.log(this.chosenManga);
    this.id = this.chosenManga.map((manga) => {
      return manga.id;
    });
    this.idManga = this.id.join();
  }


  onSubmit() {
    // Call the observable in service with the apropiate http method

    const seriesRoute = 'http://localhost:4242/packs/manage-packs';
    this.packService.postPacks(this.createPackForm.value, seriesRoute).subscribe();
    this.createPackForm.reset();
  }

  onSubmitMangaPack() {
    const seriesRoute = 'http://localhost:4242/packsMangas/create-packs-mangas';
    this.createMangasPackForm.value.mangas_id = this.idManga;
    console.log(this.createMangasPackForm.value);
    this.packService.postPacks(this.createMangasPackForm.value, seriesRoute).subscribe();
  }



}
