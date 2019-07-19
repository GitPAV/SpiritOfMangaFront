import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {
  newPasswordForm: FormGroup;
  userToken = this.router.url.split('/')[3];

  constructor(private fb: FormBuilder, 
    private loginService: LoginService, 
    private router: Router) { }

  ngOnInit() {
    console.log(this.userToken)

    this.newPasswordForm = this.fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      email: [this.userToken]
    })

  }

  onSubmit() {
    console.log(this.newPasswordForm.get('email').value)
    this.loginService.setNewPassword(this.newPasswordForm.value).then()
  }

}
