import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './../../../services/user-service.service'
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';


  

@Component({
  selector: 'app-manage-series',
  templateUrl: './manage-series.component.html',
  styleUrls: ['./manage-series.component.scss']
})
export class ManageSeriesComponent implements OnInit {

  constructor( private fb: FormBuilder, private userService: UserServiceService) { }

  manageSeriesForm = this.fb.group({
    nameSeries: ['', Validators.required],
    photoCover: ['', Validators.required],
    types_id: ['', Validators.required],
    descriptionSeries: ['', Validators.required],
  });

  nameSerie= '';
  photoSerie= '';
  descriptionSerie= '';
  searchText = '';

  series;
  types;
  
  
  ngOnInit() {
    this.userService.getSeries().subscribe(
      series => { this.series = series;
    });
    
    this.userService.getTypes().subscribe(
      types => { this.types = types;
      });
  };

  getTheSerie(serie){
    this.nameSerie = serie.nameSeries
    this.photoSerie = serie.photoCover
    this.descriptionSerie = serie.description
  }

  onSubmit() {
    //Call the observable in service with the apropiate http method 

    const seriesRoute = 'series/manage-series';
    this.userService.testPut(this.manageSeriesForm.value, seriesRoute).subscribe();
  }
  
}