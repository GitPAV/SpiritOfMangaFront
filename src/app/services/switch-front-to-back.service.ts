import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwitchFrontToBackService {
  backOffice: Observable<boolean>;
  @Output() sendBool = new EventEmitter()

  constructor() { }

  getAdminClick(bool) {
    this.backOffice = bool;
    console.log('boolean : ' + this.backOffice)
    this.sendBool.emit(this.backOffice)
  }

}
