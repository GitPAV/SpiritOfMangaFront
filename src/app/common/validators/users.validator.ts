import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'

//************ EMAIL VALIDATOR ********************/

export function emailValidator (): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const mailPattern = RegExp('^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.+[a-z]{2,4}$')

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
        const lastNamePattern = RegExp('^(?=.{2,20}$)[a-zA-Z]{2,10}[\-]{0,1}[a-zA-Z]{0,10}$')

        if (!lastNamePattern.test(control.value)) {
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

//************ PHONE NUMBER VALIDATOR ********************/

export function phoneValidator (): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const phonePattern = RegExp('^(?=.{10,10}$)[0-9]{10,10}$')

        if (!phonePattern.test(control.value)) {
             return {
                 'telephone' : control.value
                   
             }
        } else {
            return null;
        }
    }
}

//************ STREET NUM VALIDATOR ********************/

export function streetNumberValidator (): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const streetNumberPattern = RegExp('^(?=.{1,5}$)[0-9]{1,5}$')

        if (!streetNumberPattern.test(control.value)) {
             return {
                 'numRue' : control.value
                   
             }
        } else {
            return null;
        }
    }
}

//************ STREET VALIDATOR ********************/

export function streetValidator (): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const streetPattern = RegExp('^(?=.{1,30}$)[a-zA-z\-\ ]{1,30}$')

        if (!streetPattern.test(control.value)) {
             return {
                 'rue' : control.value
                   
             }
        } else {
            return null;
        }
    }
}

//************ CITY VALIDATOR ********************/

export function cityValidator (): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const streetPattern = RegExp('^(?=.{1,30}$)[a-zA-z\-\ ]{1,30}$')

        if (!streetPattern.test(control.value)) {
             return {
                 'ville' : control.value
                   
             }
        } else {
            return null;
        }
    }
}

//************ ZIP VALIDATOR ********************/

export function zipValidator (): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const zipPattern = RegExp('^(?=.{1,5}$)[0-9]{1,5}$')

        if (!zipPattern.test(control.value)) {
             return {
                 'cp' : control.value
                   
             }
        } else {
            return null;
        }
    }
}



    