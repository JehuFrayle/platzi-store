import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  saveToken(token:string){
    localStorage.setItem('session', token);
  }
  getToken(){
    return localStorage.getItem('session');
  }
  deleteToken(){
    localStorage.removeItem('session');
  }
}
