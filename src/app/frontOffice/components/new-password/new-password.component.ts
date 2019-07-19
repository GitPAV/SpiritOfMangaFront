import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
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

    this.newPasswordForm = this.fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required, this.matchValidator()]],
      email: [this.userToken]
    })
  }

  onSubmit() {
    this.loginService.setNewPassword(this.newPasswordForm.value).then()
  }

  matchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value !== this.newPasswordForm.get('password').value) {
        return {
          password: control.value
        }
      } else {
        return null
      }
    }
  }

}
