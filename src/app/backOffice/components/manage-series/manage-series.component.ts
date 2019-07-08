import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './../../../services/user-service.service'
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';


  

@Component({
  selector: 'app-manage-series',
  templateUrl: './manage-series.component.html',
  styleUrls: ['./manage-series.component.scss']
})
export class ManageSeriesComponent implements OnInit {

  constructor( private fb: FormBuilder, private userService: UserServiceService) { }

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
    this.userService.getSeries().subscribe(
      series => { this.series = series;
    });
    
    this.userService.getTypes().subscribe(
      types => { this.types = types;
      });

      this.userService.getGenres().subscribe(genres => {
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
    this.userService.getGenresId(this.serieId).subscribe(
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
    this.userService.deleteKind(i).then()
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
    this.userService.testPut(body, seriesRoute).subscribe();
  }

}
