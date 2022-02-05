import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';

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

  async sendToken(token: string) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${<string> token}`
      })
    }

    return await this.http.get(environment.urlServerToken, options).toPromise()
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