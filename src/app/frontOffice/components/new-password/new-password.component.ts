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
    this.initForm()
  }

  initForm() {
    this.newPasswordForm = this.fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      email: [this.userToken],
    }, 
    {
      validator: this.matchPassword('password', 'confirmPassword')
    })
  }

  onSubmit() {
    this.loginService.setNewPassword(this.newPasswordForm.value).then()
  }


  matchPassword(password: string, confirmPassword: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
  
      const firstPassword = control.get(password).value;
      const secondPassword = control.get(confirmPassword).value;
  
      if (firstPassword !== secondPassword) {
        return { error: 'Les deux mots de passe ne correspondent pas' };
      } else {
          return null;
      }
    };
  }

}
