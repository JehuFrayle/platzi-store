import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Auth } from '../models/auth.model';
import { User } from '../models/user.model';
import { sendToken } from '../interceptors/token.interceptor';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private tokenService: TokenService) { }
  private BASE_API = `${environment.API_URL}/auth`;
  private myProfile = new BehaviorSubject<User | null>(null);
  myProfile$ = this.myProfile.asObservable();

  login(email: string, password: string) {
    return this.httpClient.post<Auth>(`${this.BASE_API}/login`, { email, password });
  }

  profile() {
    return this.httpClient.get<User>(`${this.BASE_API}/profile`, { context: sendToken() })
      .pipe(
        tap((usr) => {
          this.myProfile.next(usr);
        }),
        catchError((err: HttpErrorResponse) => {
          if (err.status === 401) {
            this.tokenService.deleteToken();
            return throwError(() => new Error("Tu sesion expiro"))
          }
          return throwError(() => new Error("Algo salio mal"));
        })
        //Es normal que los usuarios se borren y/o las sesiones expiren.
        //Este pipe elimina el token guardado para evitar que las paginas de login y signup redirigan a Home
      )
  }
  loginAndProfile(email:string, password:string){
    return this.httpClient.post<Auth>(`${this.BASE_API}/login`, { email, password })
    .pipe(
      tap((res) => {
        this.tokenService.saveToken(res.access_token);
        this.profile()
        .subscribe();
      })
    )
  }
  logout() {
    this.myProfile.next(null)
    this.tokenService.deleteToken();
  }
}
