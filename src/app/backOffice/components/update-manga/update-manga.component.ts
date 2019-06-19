import { Component, OnInit } from '@angular/core';
import { MangaDataService } from 'src/app/services/manga-data.service';
import { Mangas } from '../../../common/models/manga.model';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-update-manga',
  templateUrl: './update-manga.component.html',
  styleUrls: ['./update-manga.component.scss']
})
export class UpdateMangaComponent implements OnInit {
  mangas : Mangas[] = [];
  title;
  picture;
  chosenManga = [];
  publics = [];
  series = [];
  seriePublic;
  currentSerie;
  currentPublic;
  mangasUnsubs;

  constructor(private mangaService: MangaDataService,
    private seriesService: SeriesService) { }

  ngOnInit() {
      this.mangasUnsubs = this.mangaService.getPublics()
        .subscribe(publics => {
          this.publics = publics;
          this.mangasUnsubs.unsubscribe();
      })

        this.seriesService.getSeries()
        .subscribe(series => {
          this.series = series;
      });
  }
  
  getChosenManga(event):void {
    this.chosenManga = event;
    this.mangaService.getSeriePublicByManga(this.chosenManga[0].title).subscribe(
      serie => {
        this.seriePublic = serie;
        this.currentSerie = this.seriePublic[0][0].nameSeries;
        this.currentPublic = this.seriePublic[1][0].name;
      }
    );
  }
  
  update(manga): void{
    if (confirm(`Êtes-vous sûr de vouloir mettre à jour le manga ${manga.title} ?`)) {
      this.mangaService.updateManga(manga).subscribe();
      alert(`Le manga ${manga.title} a bien été mis-à-jour.`)
      this.chosenManga = [];
    }
  }

  delete(manga): void{
    if (confirm(`Êtes-vous sûr de vouloir supprimer le manga ${manga.title} ?`)) {
      this.mangaService.delete(manga.id).subscribe();
      alert(`Le manga ${manga.title} a bien été supprimé.`)
      this.chosenManga = [];
    }
  }


}
