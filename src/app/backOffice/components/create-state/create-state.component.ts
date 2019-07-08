import { Component } from '@angular/core';
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

  constructor(private stateService: StatesService) { }

  ngOnInit(){
    this.stateService.getStates()
    .subscribe(state => {
      this.statesList = state;
    });
  }

  sendEtat(){
    this.stateService.postState(this.inputEtat,this.stateUrl).subscribe();
  }

  deleteState(){
    this.stateService.delete(this.selectedValue).subscribe();
  }

}
