import { Component } from '@angular/core';
import { UserServiceService } from '../../../services/user-service.service';
import { StatesService } from 'src/app/services/states.service';

@Component({
  selector: 'app-create-state',
  templateUrl: './create-state.component.html',
  styleUrls: ['./create-state.component.scss']
})
export class CreateStateComponent {
  
  selectedValue;
  statesList = [];
  inputEtat: string;
  stateUrl= "http://localhost:4242/states/manage-states";

  constructor(private etatService: UserServiceService,
              private stateService: StatesService) { }

  ngOnInit(){
    this.stateService.getStates()
    .subscribe(state => {
      this.statesList = state;
    });
  }

  sendEtat(){
    this.etatService.postState(this.inputEtat,this.stateUrl).subscribe();
  }

  deleteState(){
    this.stateService.delete(this.selectedValue).subscribe();
    console.log(this.selectedValue)
  }

}
