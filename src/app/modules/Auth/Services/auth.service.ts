import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginResponse } from '../../../core/interfaces/login-response/login-response';
import { UserLoginRequest } from '../../../core/interfaces/user-login-request/user-login-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  SERVER_URL: string = 'http://localhost:8080/auth/';

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
    return this.http.post<LoginResponse>(this.SERVER_URL + "login", user);
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
    return this.http.post(this.SERVER_URL + "register", user);
  }

  private async sendToken(token: string) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${<string> token}`
      })
    }

    return await this.http.get(this.SERVER_URL + 'checktoken', options).toPromise()
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