import { Injectable } from '@angular/core';
import { User } from 'firebase/auth';

@Injectable()
export class AuthService {

  public user:User;

  constructor(public afAuth: AngularFireAuth) { }

  async login(email: string, password:string){
    const result = await this.afAuth.creat
  }
  register(){

  }
  logout(){

  }
  getCurrentUser(){

  }
}
