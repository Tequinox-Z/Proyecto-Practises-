import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginResponse } from '../../../../core/Interfaces/login-response/login-response';
import { UserLoginRequest } from '../../../../core/Interfaces/user-login-request/user-login-request';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { 
    
  }

  isValidToken() {
    let token = localStorage.getItem('token') + '';

    if (token == null) {
      this.router.navigate(['welcome']);
    }

    return this.sendToken(token);
  }

  login(user: UserLoginRequest) {
    return this.http.post<LoginResponse>(environment.serverAddress + "/auth/login", user);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['welcome']);
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  register(user: UserLoginRequest) {
    return this.http.post(environment.serverAddress + "/auth/register", user);
  }

  private async sendToken(token: string) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${<string> token}`
      })
    }

    return await this.http.get(environment.serverAddress + '/auth/checktoken', options).toPromise()
    .then(() => {
        return true;
    })
    .catch(() => {
        localStorage.removeItem('token');
        this.router.navigate(['welcome']);
        return false;
    })
  }
}