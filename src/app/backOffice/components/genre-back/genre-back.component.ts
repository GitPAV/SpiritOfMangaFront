import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './../../../services/user-service.service'

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


  constructor(private userService: UserServiceService) { }
  
  ngOnInit() {
    this.userService.getSeries().subscribe(series => { 
		this.series = series;
		console.log(series);
	});  
      
	this.userService.getGenres().subscribe(genres => {
		this.genres = genres;
        console.log(genres);
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
	console.log(this.kinds);
}

deletAKind(){
	const deleteIndex = this.kinds.indexOf(this.selectedKind)
	this.kinds.splice(deleteIndex, 1);
	console.log(this.kinds);
}

onSubmit(){
	for (let i = 0; i < this.kinds.length; i++){
		this.userService.postGenresManga( this.kinds[i].id, this.selectedSerie.id).then((res) => {
			console.log(this.kinds[i])
		})
	}
	this.selectedSerie = false;
	this.kinds= [];

}
}
