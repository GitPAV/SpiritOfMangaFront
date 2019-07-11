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

  // Data sent to order button and stored in session storage for the basket
  mangaId;

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

  // to display the order button or the disponibility alert button
  stockUnsubs;
  noStock: boolean;

  constructor(private mangadataservice: MangaDataService,
              private seriesService: SeriesService,
              private typeService: TypesServiceService,
              private activatedRoute: ActivatedRoute) {

              this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
                this.mangadataservice.getMangas().subscribe(mangas => {
                  this.mangas = mangas;
                  this.mangaId = parseInt(params.get('mangaID')); // Récupère id du manga dans l'adresse url
                  this.choosenManga = this.mangas[this.mangaId - 1]; // Récupère l'objet Manga

                  this.stockUnsubs = this.mangadataservice.getPromotedMangaById(this.choosenManga.id).subscribe( manga => {
                    manga[0].stock > 0 ? this.noStock = false : this.noStock = true;
                    this.stockUnsubs.unsubscribe()
                  })

                  this.seriesService.getSeries().subscribe(series => {
                    this.series = series;
                    this.choosenSerie = this.series[this.choosenManga.series_id - 1]; // Récupère la série du Manga
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