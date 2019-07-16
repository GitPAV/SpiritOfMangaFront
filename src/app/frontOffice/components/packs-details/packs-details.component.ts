import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { GetPacksService } from '../../../services/get-packs.service';
import { MangaDataService } from '../../../services/manga-data.service';

@Component({
  selector: 'app-packs-details',
  templateUrl: './packs-details.component.html',
  styleUrls: ['./packs-details.component.scss']
})
export class PacksDetailsComponent implements OnInit {

  packs = [];
  mangas = [];
  listMangas = [];
  listMangasPack = [];

  packManga;
  choosenPack;
  packID;
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
      this.GetPacksService.getPacks().subscribe(packs => {
        this.packs = packs;
        this.packID = parseInt(params.get('packID')); // Récupère ID du pack
        this.choosenPack = this.packs[this.packID - 1]; // Récupère le pack by ID
        console.log(this.choosenPack);
        this.comment = this.choosenPack.comment;
        this.choosenPack.stock > 0 ? this.stock = true : this.stock = false;

        this.GetPacksService.getPacksByID(this.packID).subscribe(packManga => {
          this.packManga = packManga;
          this.packManga.forEach(element => {
            const value = element.mangas_id;
            this.MangaDataService.getMangasById(value).subscribe(listMangas => {
              this.listMangas = listMangas;
              this.listMangasPack.push(this.listMangas[0]);
            });
          });
          this.nbTomes = this.listMangasPack.length;
          console.log(this.listMangasPack.length);
          console.log(this.listMangasPack);
          
          
        });


      });
    });

  }

}

