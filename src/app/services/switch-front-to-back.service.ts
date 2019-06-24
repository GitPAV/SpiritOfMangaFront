import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwitchFrontToBackService {
  backOffice: Observable<boolean>;

  constructor() { }

  getAdminClick(bool) {
    this.backOffice = bool;
    console.log(this.backOffice)
  }

  sendAdminClick(): Observable<any> {
    return this.backOffice
  }
}
