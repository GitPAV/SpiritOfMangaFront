import { Component, OnInit } from '@angular/core';
import { GenresService } from 'src/app/services/genres.service';
import { SeriesService } from 'src/app/services/series.service';



@Component({
  selector: 'app-genre-back',
  templateUrl: './genre-back.component.html',
  styleUrls: ['./genre-back.component.scss']
})
export class GenreBackComponent implements OnInit {

  series;
  selectedSerie;
  genres;
  searchText;
  kinds = [];
  selectedKindindex;
  selectedKind: number;
  genresMangas;
  showKind;


  constructor(private seriesService: SeriesService,
    	private genresService: GenresService) { }
  
  ngOnInit() {
    this.seriesService.getSeries().subscribe(series => { 
		this.series = series;
	});  
      
	this.genresService.getGenres().subscribe(genres => {
		this.genres = genres;
	});

	
}

getTheSerie(serie){
	this.selectedSerie = serie;
    this.searchText= '';
}

addAKind(){
	this.showKind = true;
	const selectedKind = this.genres[this.selectedKindindex];
	this.kinds.push(selectedKind);
}

deletAKind(){
	const deleteIndex = this.kinds.indexOf(this.selectedKind)
	this.kinds.splice(deleteIndex, 1);
}

onSubmit(){
	for (let i = 0; i < this.kinds.length; i++){
		this.genresService.postGenresManga( this.kinds[i].id, this.selectedSerie.id).then()
	}
	this.selectedSerie = false;
	this.kinds= [];

}
}
