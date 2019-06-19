import { Component } from '@angular/core';
import { UserServiceService } from '../../../services/user-service.service';

@Component({
  selector: 'app-create-state',
  templateUrl: './create-state.component.html',
  styleUrls: ['./create-state.component.scss']
})
export class CreateStateComponent {
  
  statesList;
  inputEtat: string;
  stateUrl= "http://localhost:4242/states/manage-states";

  constructor(private etatService: UserServiceService) { }

  sendEtat(){
    this.etatService.postState(this.inputEtat,this.stateUrl).subscribe();
  }
  
  getSerie(){
    this.statesList= this.etatService.getSeries().subscribe();
    console.log(this.statesList)
  }

}
