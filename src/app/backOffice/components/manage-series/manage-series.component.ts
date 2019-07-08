import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

import { SeriesService } from 'src/app/services/series.service';
import { TypesServiceService } from 'src/app/services/types-service.service';
import { GenresService } from 'src/app/services/genres.service';

@Component({
  selector: 'app-manage-series',
  templateUrl: './manage-series.component.html',
  styleUrls: ['./manage-series.component.scss']
})
export class ManageSeriesComponent implements OnInit {

  constructor( private fb: FormBuilder, 
    private seriesService: SeriesService,
    private typesService: TypesServiceService,
    private genresService: GenresService) { }

  manageSeriesForm : FormGroup;

  nameSerie= '';
  photoSerie= '';
  description= '';
  searchText = '';
  types_id = '';
  serieId;
  genresId;

  series;
  types;
  genres;
  displayKinds = [];
  newKindId: number;
  
  
  ngOnInit() {
    this.seriesService.getSeries().subscribe(
      series => { this.series = series;
    });
    
    this.typesService.getTypes().subscribe(
      types => { this.types = types;
      });

      this.genresService.getGenres().subscribe(genres => {
        this.genres = genres;
      });

    this.initForm()
  };

  getTheSerie(serie){
    this.nameSerie = serie.nameSeries
    this.photoSerie = serie.photoCover
    this.description = serie.description
    this.types_id = serie.types_id
    this.serieId = serie.id
    this.genresService.getGenresId(this.serieId).subscribe(
      genreId => { this.genresId = JSON.parse(genreId);
        this.displayKinds = this.genresId
      });
      this.initForm()
    }
    


  getNewKind(genre) {
    event.preventDefault();
    this.newKindId = genre
    console.log(this.newKindId)
    console.log(this.serieId)
  }

  addNewKind() {
    
  }


  deletAKind(i) {
    event.preventDefault();
    this.genresService.deleteKind(i).then()
  }

  initForm() {
    this.manageSeriesForm = this.fb.group({
      nameSeries: [ this.nameSerie, Validators],
      photoCover: [ this.photoSerie, Validators],
      types_id: [ this.types_id, Validators],
      description: [ this.description, Validators],
    });
  }

  onSubmit() {
    const seriesRoute = 'http://localhost:4242/series/manage-series';
    const body = {
      id : this.serieId,
      data : this.manageSeriesForm.value
    }
    console.log(body);
    this.seriesService.seriesPut(body, seriesRoute).subscribe();
  }

}
