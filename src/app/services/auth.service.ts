import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../models/auth.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }
  private BASE_API = 'https://young-sands-07814.herokuapp.com/api';

  login(email: string, password: string) {
    return this.httpClient.post<Auth>(`${this.BASE_API}/auth/login`, { email, password })
  }
  profile() {
    return this.httpClient.get<User>(`${this.BASE_API}/auth/profile`)
  }
}
