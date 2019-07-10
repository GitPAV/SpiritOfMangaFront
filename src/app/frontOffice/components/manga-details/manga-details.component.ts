import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { MangaDataService } from '../../../services/manga-data.service';
import { SeriesService } from '../../../services/series.service';
import { TypesServiceService } from '../../../services/types-service.service';

import { Mangas } from 'src/app/common/models/manga.model';



@Component({
  selector: 'app-manga-details',
  templateUrl: './manga-details.component.html',
  styleUrls: ['./manga-details.component.scss']
})
export class MangaDetailsComponent implements OnInit {

  mangaId;
  stateMangaId = 1; // Id to get when statesMangas will be called
  mangas = [];
  series = [];
  types = [];
  choosenManga: Mangas;
  choosenSerie: {
    desciption;
    id;
    nameSeries;
    photoCover;
    types_id;
  };
  choosenType;

  constructor(private mangadataservice: MangaDataService,
              private seriesService: SeriesService,
              private typeService: TypesServiceService,
              private activatedRoute: ActivatedRoute) {

              this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
                this.mangadataservice.getMangas().subscribe(mangas => {
                  this.mangas = mangas;
                  // tslint:disable-next-line: radix
                  this.mangaId = parseInt(params.get('mangaID')); // Récupère id du manga dans l'adresse url
                  this.choosenManga = this.mangas[this.mangaId - 1]; // Récupère l'objet Manga
                  console.log(this.choosenManga);

                  this.seriesService.getSeries().subscribe(series => {
                    this.series = series;
                    this.choosenSerie = this.series[this.choosenManga.series_id - 1]; // Récupère la série du Manga
                    console.log(this.choosenSerie);
                    this.choosenType = this.types[this.choosenSerie.types_id - 1]; // Récupère le type de la Série
                  });
                });
              });
            }

ngOnInit() {
    this.typeService.getTypes().subscribe(types => {
      this.types = types;
    });
  }

}
