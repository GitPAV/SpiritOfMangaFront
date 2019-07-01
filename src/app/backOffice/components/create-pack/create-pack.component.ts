import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { UserServiceService} from '../../../services/user-service.service';
import { StatesService } from 'src/app/services/states.service';
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
  chosenPack = [];
  packs = [];
  listMangas = [];
  mangasPacks = {};
  listMangasPacks = [];
  packsMangas;
  id1;
  id2;
  idPack;
  idManga;

  constructor(private fb: FormBuilder,
              private userService: UserServiceService,
              private statesService: StatesService,
              private packService: GetPacksService,
              private mangaService: MangaDataService,
              ) { }

  ngOnInit() {

    this.statesService.getStates()
      .subscribe(states => {
        this.states = states;
      });

    this.userService.getPacks()
      .subscribe(packs => {
        this.packs = JSON.parse(packs);
        console.log(this.packs);
      });
  }


  getChosenManga(event) {
    this.chosenManga = event;
    console.log(this.chosenManga);
    this.id1 = this.chosenManga.map((manga) => {
      return manga.id;
    });
    this.idManga = this.id1.join();
  }

  getPacks(event) {
    this.listMangasPacks = [];
    this.chosenPack = event;
    this.id2 = this.chosenPack.map((pack) => {
      return pack.id;
    });
    this.idPack = this.id2.join();
    this.packService.getPacksByID(this.idPack)
      .subscribe(packManga => {
      this.packsMangas = packManga;
      this.packsMangas.forEach(element => {
        let value = element.mangas_id;
        this.mangaService.getMangasById(value)
          .subscribe(listMangas => {
          this.mangasPacks = listMangas;
          this.listMangasPacks.push(this.mangasPacks[0]);
          console.log(this.listMangasPacks);
          });
      });
    });
  }

  deleteManga(id){
    console.log(id);
    
  }


  onSubmit() {
    // Call the observable in service with the apropiate http method

    const seriesRoute = 'http://localhost:4242/packs/manage-packs';
    this.userService.postMangas(this.createPackForm.value, seriesRoute).subscribe();
    this.createPackForm.reset();
  }

  onSubmitMangaPack() {
    const seriesRoute = 'http://localhost:4242/packsMangas/create-packs-mangas';
    this.createMangasPackForm.value.mangas_id = this.idManga;
    this.createMangasPackForm.value.packs_id = this.idPack;
    console.log(this.createMangasPackForm.value);
    this.userService.postMangas(this.createMangasPackForm.value, seriesRoute).subscribe();
  }



}
