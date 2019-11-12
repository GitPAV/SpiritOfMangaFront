import { Component, OnInit } from '@angular/core';
import { GetPacksService } from '../../../services/get-packs.service'

@Component({
  selector: 'app-gallery-pack',
  templateUrl: './gallery-pack.component.html',
  styleUrls: ['./gallery-pack.component.scss']
})
export class GalleryPackComponent implements OnInit {
  packs;

  constructor( private GetPacksService : GetPacksService) { }

  ngOnInit() {
    this.GetPacksService.getPacks().subscribe(packs => {
      this.packs = packs;
      this.GetPacksService.sendPacksUpdate.subscribe( packs => {
        this.packs = packs
      })
    })
  }

}
