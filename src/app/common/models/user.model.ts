export interface User {
    id: number,
    pseudo?: string,
    firstname: string,
    lastname: string,
    password: string,
    forgetPassword: string,
    email: string,
    telephone?: number,
    numRue: number,
    rue: string,
    cp: number,
    ville: string,
    connaissance: string,
    newsletter: string,
    droits: string
}