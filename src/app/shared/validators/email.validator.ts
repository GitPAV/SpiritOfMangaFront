import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'

export function emailValidator (): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const mailPattern = RegExp('^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$')

        console.log('Mail value in ts',control.value)
        console.log(mailPattern.test(control.value))
        

        if (!mailPattern.test(control.value)) {
             return {
                 'email' : control.value
                   
             }
        } else {
            return null;
        }
    }
}