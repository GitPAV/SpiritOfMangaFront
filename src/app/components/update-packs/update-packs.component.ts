import { Component, OnInit } from '@angular/core';
import { GetPacksService } from '../../services/get-packs.service';

@Component({
  selector: 'app-update-packs',
  templateUrl: './update-packs.component.html',
  styleUrls: ['./update-packs.component.scss']
})
export class UpdatePacksComponent implements OnInit {
  packs = [];
  chosenPacks = [];

  constructor(private packsService: GetPacksService) { }

  ngOnInit() {
    this.packsService.getPacks()
      .subscribe(packs => {
        this.packs = packs;
      })
  }

  getChosenPack(event):void {
    this.chosenPacks = event;
  }

  update(packs){
    console.log(packs);
    this.packsService.updatePack(packs).subscribe();
  }


}
