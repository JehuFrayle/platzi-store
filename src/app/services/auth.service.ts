import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../models/auth.model';
import { User } from '../models/user.model';
import { sendToken } from '../interceptors/token.interceptor';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }
  private BASE_API = 'https://young-sands-07814.herokuapp.com/api';
  private myProfile = new BehaviorSubject<User>({
    name: 'Guest',
    email: '',
    password: '',
    id: 0
  });
  myProfile$ = this.myProfile.asObservable();

  login(email: string, password: string) {
    return this.httpClient.post<Auth>(`${this.BASE_API}/auth/login`, { email, password })
  }
  profile() {
    return this.httpClient.get<User>(`${this.BASE_API}/auth/profile`, { context: sendToken() })
  }
  updateProfile() {
    this.profile().subscribe(user => {
    this.myProfile.next(user);
    })
  }
}
