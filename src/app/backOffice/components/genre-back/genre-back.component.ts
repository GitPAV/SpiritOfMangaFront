import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './../../../services/user-service.service'

@Component({
  selector: 'app-genre-back',
  templateUrl: './genre-back.component.html',
  styleUrls: ['./genre-back.component.scss']
})
export class GenreBackComponent implements OnInit {

  series;
  selectSerie;
  genres;

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
    this.userService.getSeries().subscribe(
      series => { this.series = series;
      console.log(series);
    });

    this.userService.getGenres().subscribe(
      genres => { this.genres = genres;
      console.log(genres);
    });
    
  }

  getTheSerie(serie){
    this.selectSerie = serie.nameSeries;
  }
  

}
