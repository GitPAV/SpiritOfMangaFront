import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SwitchFrontToBackService {
  backOffice: Observable<boolean>;
  @Output() sendBool = new EventEmitter()

  constructor(private router: Router) { }

  getAdminClick(bool) {
    console.log('test logout')
    this.backOffice = bool;
    this.sendBool.emit(this.backOffice)
    this.router.navigate([''])
    localStorage.removeItem("token")
  }

}
