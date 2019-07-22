import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { emailValidator, firstnameValidator, lastnameValidator, passwordValidator, 
  streetNumberValidator, streetValidator, cityValidator, zipValidator } from '../../../common/validators/users.validator';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { getToken } from '@angular/router/src/utils/preactivation';
import decode from 'jwt-decode';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.scss']
})
export class UserProfilComponent implements OnInit {
  
  show:boolean;
  firstname;
  userId;
  userProfil;

  postUserForm = this.fb.group({
    pseudo: [''],
    firstname: ['', [firstnameValidator()]],
    lastname: ['', [lastnameValidator()]],
    email: ['', [ emailValidator()]],
    telephone: [''],
    numRue: ['', [streetNumberValidator()]],
    rue: ['', [ streetValidator()]],
    ville: ['', [ cityValidator()]],
    cp: ['', [ zipValidator()]],
    newsletter: [''],
    connaissance: [''],
    droits: [''], 
  });
   token = localStorage.getItem('token');

  constructor(private fb: FormBuilder, 
    private router : Router,
    private userService: UserServiceService) { }
    
    ngOnInit() {
      this.getToken();
      this.userService.getUserById(this.userId).subscribe(
        user => {
          const userData = user;
          this.userProfil = userData[0];
          this.firstname = this.userProfil.firstname;
          this.postUserForm.patchValue({
          pseudo: this.userProfil.pseudo,
          firstname: this.userProfil.firstname,
          lastname: this.userProfil.lastname,
          email: this.userProfil.email,
          telephone: this.userProfil.telephone,
          numRue: this.userProfil.numRue,
          rue: this.userProfil.rue,
          ville: this.userProfil.ville,
          cp: this.userProfil.cp,
          newsletter: this.userProfil.newsletter,
          connaissance: [''],
          droits: [''],
        });
    });
  }

  onSubmit(){
    this.userService.modifUser(this.userId, this.postUserForm.value).subscribe()
  }

    getToken(){
      if(this.token){
        const tokenPayload = decode(this.token);
        this.userId = tokenPayload.id;
      } else {
        console.log('error with user token');
      }
    }
    display() {
      this.show = !this.show;
  }

  disconnect(){
    localStorage.removeItem('token');
    this.router.navigate(['']);
    this.userService.logStatus();
  }

}
