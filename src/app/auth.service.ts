import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>;
  constructor(private fireAuth: AngularFireAuth) {
    this.user = fireAuth.authState;

  }

  signUp(email: string, password: string) {
    this.fireAuth.auth.createUserWithEmailAndPassword(email, password)
    .then(value => {
      return value;
    })
    .catch(err => {
      return err;
    });
  }

  login(email: string, password: string) {
    this.fireAuth.auth.signInWithEmailAndPassword(email, password)
    .then(value => {
    })
    .catch(err => {
    });
  }

  signOut() {
    this.fireAuth.auth.signOut();
  }


}
