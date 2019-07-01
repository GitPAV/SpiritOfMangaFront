import { Component, OnInit } from '@angular/core';
import { MangaDataService } from 'src/app/services/manga-data.service';
import { Mangas } from 'src/app/common/models/manga.model';

@Component({
  selector: 'app-disponibility-alerts',
  templateUrl: './disponibility-alerts.component.html',
  styleUrls: ['./disponibility-alerts.component.scss']
})
export class DisponibilityAlertsComponent implements OnInit {
  ordersAwaiting: [];

  constructor(private mangaService: MangaDataService) { }

  ngOnInit() {
    this.mangaService.getMangasAwaiting().subscribe(
      mangas => {
        this.ordersAwaiting = mangas
        console.log(this.ordersAwaiting)
      }
    )
  }

}
