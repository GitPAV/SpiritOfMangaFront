import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../../services/login.service';


@Component({
  selector: 'app-regenerate-password',
  templateUrl: './regenerate-password.component.html',
  styleUrls: ['./regenerate-password.component.scss']
})
export class RegeneratePasswordComponent implements OnInit {
  sendEmailForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService
    ) { }

  ngOnInit() {
    this.sendEmailForm = this.fb.group({
      email: ['', Validators.required]
    })
  }

  onSubmit(){
    this.loginService.regeneratePassword(this.sendEmailForm.value).then( res => {
      alert('Merci ! Vous allez recevoir un mail pour changer votre mot de passe.')
      this.sendEmailForm.reset()
    }).catch( err => {
      console.log(err)
      alert('Une erreur est survenue. Merci de réessayer.')
    })
  }

}
