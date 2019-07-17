import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Packs } from '../../../common/models/pack.model';
import { GetPacksService } from '../../../services/get-packs.service';
import { MangaDataService } from '../../../services/manga-data.service';

@Component({
  selector: 'app-packs-details',
  templateUrl: './packs-details.component.html',
  styleUrls: ['./packs-details.component.scss']
})
export class PacksDetailsComponent implements OnInit {

  mangas = [];
  listMangas = [];
  listMangasPack = [];
  pack = {};
  packManga;
  choosenPack;
  comment;
  nbTomes;
  stock;

  constructor(
    private activatedRoute: ActivatedRoute,
    private GetPacksService: GetPacksService,
    private MangaDataService: MangaDataService,
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const packID = parseInt(params.get('packID')); // Récupère ID du pack
      this.GetPacksService.get1PackbyID(packID).subscribe(pack => { // Récupère le pack via l'ID
        this.pack = pack;
        this.choosenPack = this.pack[0];
        this.comment = this.choosenPack.comment;
        this.choosenPack.stock > 0 ? this.stock = true : this.stock = false;

        this.GetPacksService.getPacksByID(packID).subscribe(packManga => { // Récupère les ID des mangas dans le pack
          this.packManga = packManga;
          this.nbTomes = this.packManga.length;
          this.packManga.forEach(element => { // Push les mangas du pack 1 par 1 dans une liste
            const value = element.mangas_id;
            this.MangaDataService.getMangasById(value).subscribe(listMangas => {
              this.listMangas = listMangas;
              this.listMangasPack.push(this.listMangas[0]);
            });
          });
        });
      });

    });
  }

}

