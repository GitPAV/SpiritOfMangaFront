import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './../../../services/user-service.service'


  

@Component({
  selector: 'app-manage-series',
  templateUrl: './manage-series.component.html',
  styleUrls: ['./manage-series.component.scss']
})
export class ManageSeriesComponent implements OnInit {

  constructor( private userService: UserServiceService) { }

  series;
  searchText = '';
  
  ngOnInit() {
    this.userService.getSeries().subscribe(
      series => { this.series = series;
      });
  }

  
  
}
