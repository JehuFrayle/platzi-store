import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateUserDTO, User } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }
  private BASE_API = `${environment.API_URL}`;
  getAll() {
    return this.httpClient.get<User[]>(`${this.BASE_API}/users`);
  }
  create(dto: CreateUserDTO) {
    return this.httpClient.post<User>(`${this.BASE_API}/users`, dto);
  }
}
