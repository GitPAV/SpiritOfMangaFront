import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { GetPacksService } from 'src/app/services/get-packs.service';
import { MangaDataService } from 'src/app/services/manga-data.service';


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
    prixPromo: [],
    notrePrix: ['', Validators.required],
    tomes: [],
    comment: [],
  });

  createMangasPackForm = this.fb.group({
    packs_id: ['', Validators.required],
    mangas_id: ['', Validators.required],
  });

  states = [];
  chosenManga = [];
  chosenPack;
  listMangas = [];
  mangasPacks = {};
  listMangasPacks = [];
  selectedPack = [];
  packs = [];
  packsMangas;
  id1;
  idPack;
  id;
  idManga;
  displaySearch = true;
  conditionCreate = true;
  conditionModifPack = false;

  constructor(private fb: FormBuilder,
              private packService: GetPacksService,
              private mangaService: MangaDataService,
              ) { }

  ngOnInit() {

    this.packService.getPacks()
      .subscribe(packs => {
        this.packs = packs;
      });

  }

  getPacks(event) { // Recupère le pack select de la searchBar
    this.listMangasPacks = [];

    this.chosenPack = event[0];
    this.idPack = this.chosenPack.id;
    this.packService.getPacksByID(this.idPack)
    .subscribe(packManga => { // Récupère les mangas contenus dans le pack selectionné
      this.packsMangas = packManga;

      this.packsMangas.forEach(element => {
        const value = element.mangas_id;
        this.mangaService.getMangasById(value)
        .subscribe(listMangas => {
          this.mangasPacks = listMangas;
          this.listMangasPacks.push(this.mangasPacks[0]);
        });
      });
    });
  }

  getChosenManga(event) { // Recupère le manga select de la searchBar
    this.displaySearch = true;
    this.chosenManga = event;
    this.id1 = this.chosenManga.map((manga) => {
      return manga.id;
    });
    this.idManga = this.id1.join();
  }

  deleteManga(idManga, index) {
    const id2 = idManga;
    const id1 = this.idPack;
    this.mangaService.deleteMangaPack(id1, id2).subscribe(_ => {
      this.listMangasPacks.splice(index, 1);
    });
  }

  onSubmit() {
    const seriesRoute = 'http://localhost:4242/packs/manage-packs';
    this.packService.postPacks(this.createPackForm.value, seriesRoute).subscribe();
    this.createPackForm.reset();
  }

  onSubmitMangaPack(i) {
    const seriesRoute = 'http://localhost:4242/packsMangas/create-packs-mangas';
    this.createMangasPackForm.value.mangas_id = this.idManga;
    this.createMangasPackForm.value.packs_id = this.idPack;
    this.packService.postPacks(this.createMangasPackForm.value, seriesRoute).subscribe(_ => {
      this.listMangasPacks.push(this.chosenManga[i]);
    });
    this.displaySearch = false;
  }

  chosenForm() {
    if (this.conditionCreate === false) {
      this.conditionCreate = !this.conditionCreate;
      this.conditionModifPack = !this.conditionModifPack;
    }
  }

  chosenForm_1() {
    if (this.conditionModifPack === false) {
      this.conditionCreate = !this.conditionCreate;
      this.conditionModifPack = !this.conditionModifPack;
    }
  }

}
