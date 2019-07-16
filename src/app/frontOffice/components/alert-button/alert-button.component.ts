import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/common/models/user.model';
import { MangaDataService } from 'src/app/services/manga-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alert-button',
  templateUrl: './alert-button.component.html',
  styleUrls: ['./alert-button.component.scss']
})
export class AlertButtonComponent implements OnInit {
  // idManga to get from the front office when manga card is done 
  @Input() idManga: number;
  user: User;
  infosToSend = [];

  constructor(
    private loginService: LoginService,
    private mangaService: MangaDataService,
    private router: Router) { }

  ngOnInit() {
    this.infosToSend = [];
  }

  /* Need to manage unconnected users when they click on the alert button */

  sendToGetAlert(){

    if (localStorage.getItem('token')) {
      this.loginService.getUserConnected().subscribe(
        user => {
          this.user = user;
          this.infosToSend.push(this.user[0].id, this.idManga)
          this.mangaService.sendMangaAwaiting(this.infosToSend)
          .then( res => {
            alert('Merci ! Vous recevrez un mail lorsque le manga sera disponible.')
          }
        ).catch( error => {
          console.error(error);
          this.router.navigate(['/form-user'])
        })
      })
    } else {
      this.router.navigate(['front/user-login'])
    }
  }

}
