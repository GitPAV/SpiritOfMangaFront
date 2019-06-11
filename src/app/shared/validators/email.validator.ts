import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'

//************ EMAIL VALIDATOR ********************/

export function emailValidator (): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const mailPattern = RegExp('^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$')

        if (!mailPattern.test(control.value)) {
             return {
                 'email' : control.value
                   
             }
        } else {
            return null;
        }
    }
}

//************ PSEUDO VALIDATOR ********************/

export function pseudoValidator (): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const pseudoPattern = RegExp('^(?=.{4,20}$)[a-zA-Z0-9]{0,20}[\._-]{0,4}[a-zA-Z0-9]{0,20}$')

        if (!pseudoPattern.test(control.value)) {
             return {
                 'pseudo' : control.value
                   
             }
        } else {
            return null;
        }
    }
}

//************ FIRSTNAME VALIDATOR ********************/

export function firstnameValidator (): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const firstNamePattern = RegExp('^(?=.{2,20}$)[a-zA-Z]{2,10}[\-]{0,1}[a-zA-Z]{0,10}$')

        if (!firstNamePattern.test(control.value)) {
             return {
                 'firstname' : control.value
                   
             }
        } else {
            return null;
        }
    }
}

//************ LASTNAME VALIDATOR ********************/

export function lastnameValidator (): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const firstNamePattern = RegExp('^(?=.{2,20}$)[a-zA-Z]{2,10}[\-]{0,1}[a-zA-Z]{0,10}$')

        if (!firstNamePattern.test(control.value)) {
             return {
                 'lastname' : control.value
                   
             }
        } else {
            return null;
        }
    }
}

//************ PASSWORD VALIDATOR ********************/

export function passwordValidator (): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const passwordPattern = RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})')

        if (!passwordPattern.test(control.value)) {
             return {
                 'password' : control.value
                   
             }
        } else {
            return null;
        }
    }
}

//************ PASSWORD REPEATED ********************/

    