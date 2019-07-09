import { Component, OnInit } from '@angular/core';
import { MangaDataService } from 'src/app/services/manga-data.service';

@Component({
  selector: 'app-disponibility-alerts',
  templateUrl: './disponibility-alerts.component.html',
  styleUrls: ['./disponibility-alerts.component.scss']
})
export class DisponibilityAlertsComponent implements OnInit {
  ordersAwaiting: [];
  mangas = [];
  users = [];
  manga;
  displayUsers = false;

  constructor(private mangaService: MangaDataService) { }

  ngOnInit() {
    // getting datas from mangasAwaiting table
    this.mangaService.getMangasAwaiting().subscribe(
      mangas => {
        this.ordersAwaiting = mangas
        this.datasOrdering(this.ordersAwaiting)
    })
  }

  // filter to only display one instance of each wanted manga
  datasOrdering(datas) {
    datas.map( item => {
      if (this.mangas.includes(item.title)) {
        return
      } else {
        this.mangas.push(item.title)
      }
    })
  }

  // filter to get every user who has asked for the manga clicked by admin
  getAwaitingUsers(manga, datas) {
    this.users = []
    this.manga = manga;
    this.displayUsers = true;

    datas.forEach (item => {
      if (item.title === manga && !this.users.includes(manga)) {
        this.users.push(item)
      }
    })
  }

}
