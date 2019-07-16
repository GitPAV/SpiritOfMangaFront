import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { MangaDataService } from '../../../services/manga-data.service';
import { SeriesService } from '../../../services/series.service';
import { TypesServiceService } from '../../../services/types-service.service';
import { GenresService } from '../../../services/genres.service';
import { StatesService } from '../../../services/states.service';

import { Mangas } from 'src/app/common/models/manga.model';


@Component({
  selector: 'app-manga-details',
  templateUrl: './manga-details.component.html',
  styleUrls: ['./manga-details.component.scss']
})
export class MangaDetailsComponent implements OnInit {

  // Data sent to order button and stored in session storage for the basket
  mangaId;

  mangas = [];
  series = [];
  types = [];
  states = [];
  statesMangas;
  statesID;
  displayState;
  choosenManga: Mangas;
  choosenSerie: {
    desciption;
    id;
    nameSeries;
    photoCover;
    types_id;
  };
  choosenType;
  genres;
  prixTTC;
  genresDisplay = "";

  // to display the order button or the disponibility alert button
  stockUnsubs;
  noStock: boolean;

  constructor(
    private mangadataservice: MangaDataService,
    private seriesService: SeriesService,
    private typeService: TypesServiceService,
    private genresService: GenresService,
    private stateService: StatesService,
    private activatedRoute: ActivatedRoute
  ) {}
              
    ngOnInit() {
      this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
        this.mangadataservice.getMangas().subscribe(mangas => {
          this.mangas = mangas;
          this.mangaId = parseInt(params.get('mangaID')); // Récupère id du manga dans l'adresse url
          this.choosenManga = this.mangas[this.mangaId - 1]; // Récupère l'objet Manga

          this.stockUnsubs = this.mangadataservice.getPromotedMangaById(this.choosenManga.id).subscribe( manga => {
            manga.length == 0 ? this.noStock = true : this.noStock = false;
            manga[0].stock > 0 ? this.noStock = false : this.noStock = true;
            this.stockUnsubs.unsubscribe()
          })

          this.seriesService.getSeries().subscribe(series => {
            this.series = series;
            this.choosenSerie = this.series[this.choosenManga.series_id - 1]; // Récupère la série du Manga
            this.choosenType = this.types[this.choosenSerie.types_id - 1]; // Récupère le type de la Série

            this.genresService.getGenresId(this.choosenManga.series_id).subscribe(genres => { // Récupère les genres de la Série
              this.genres = JSON.parse(genres);
              // tslint:disable-next-line: prefer-for-of
              for (let i = 0 ; i < this.genres.length;  i++) { // Push les genres de la Série dans "genresDisplay"
                this.genresDisplay = this.genresDisplay + this.genres[i].name + ' / ';
              }
              this.genresDisplay = this.genresDisplay.substr(0 , this.genresDisplay.length - 2);
            });
          });

          this.mangadataservice.getMangasStatesById(this.mangaId).subscribe(statesMangas => { // Récupère 2nd part des DATA du manga
            this.statesMangas = statesMangas;
            console.log(this.statesMangas);
            
            this.prixTTC = this.statesMangas[0].prixTTC; // Recupere prix TTC du manga
            this.statesID = this.statesMangas[0].states_id;
            this.displayState = this.states[this.statesID - 1].name; // Récupere etat du manga
          });
        });
      });

      this.typeService.getTypes().subscribe(types => {
        this.types = types;
      });
      this.stateService.getStates().subscribe(states => {
        this.states = states;
      });
  }

}