import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateUserDTO, User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient:HttpClient) { }
  private BASE_API = 'https://young-sands-07814.herokuapp.com/api';
  getAll() {
    return this.httpClient.get<User[]>(`${this.BASE_API}/users`);
  }
  create(dto: CreateUserDTO) {
    return this.httpClient.post<User>(`${this.BASE_API}/users`, dto);
  }
}
