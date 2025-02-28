import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  signUp(email: string, password: string) {
    createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        console.log('Credenciales de usuario: ', userCredential);
      })
      .catch((error) => {
        // Error
        console.log('Código de error: ', error.code);
        console.log('Mensaje de error: ', error.message);
      })
  }

  login(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        console.log('Credenciales de usuario: ', userCredential);

      })
      .catch((error) => {
        // Error
        console.log('Código de error: ', error.code);
        console.log('Mensaje de error: ', error.message);
      });
  }

  logOut(){
    signOut(this.auth)
      .then(() => {
        console.log('Se ha cerrado la sesión');
      })
      .catch((error) => {
        console.log('Código de error: ', error.code);
        console.log('Mensaje de error: ', error.message);
      });
  }

}

