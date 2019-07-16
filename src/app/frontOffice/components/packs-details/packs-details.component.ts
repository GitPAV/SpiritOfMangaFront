import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { GetPacksService } from '../../../services/get-packs.service';


@Component({
  selector: 'app-packs-details',
  templateUrl: './packs-details.component.html',
  styleUrls: ['./packs-details.component.scss']
})
export class PacksDetailsComponent implements OnInit {

  packs = [];

  choosenPack;
  packsID;

  constructor(
    private activatedRoute: ActivatedRoute,
    private GetPacksService: GetPacksService,
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.GetPacksService.getPacks().subscribe(packs => {
        this.packs = packs;
        this.packsID = parseInt(params.get('packID')); // Récupère ID du pack
        this.choosenPack = this.packs[this.packsID - 1]; // Récupère le pack by ID
        console.log(this.choosenPack);
        
      });
    });

  }

}

