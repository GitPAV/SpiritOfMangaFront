import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { UserServiceService} from '../../../services/user-service.service';
import { StatesService } from 'src/app/services/states.service';


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
  packs = [];
  id;
  idManga;
  conditionCreate:boolean = true;
  conditionModifPack: boolean = false;

  constructor(private fb: FormBuilder, 
    private userService: UserServiceService,
    private statesService: StatesService) { }

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
    this.id = this.chosenManga.map((manga) => {
      return manga.id;
    });
    this.idManga = this.id.join();
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
    console.log(this.createMangasPackForm.value);
    this.userService.postMangas(this.createMangasPackForm.value, seriesRoute).subscribe();
  }

  chosenForm(){
    this.conditionCreate = !this.conditionCreate;
    this.conditionModifPack = !this.conditionModifPack;
  }

}
