import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../../Auth/Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private auth: AuthService) { 

  }

  getUser(token: String) {
    
    const options: any = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.auth.getToken()}`
      })
    }

    return this.http.get(`${environment.serverAddress}/user`, options);
  }
}