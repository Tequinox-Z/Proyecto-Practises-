import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../../Auth/Services/Auth-service/auth.service';
import { PersonDto } from '../../../../core/Interfaces/personDto/person-dto';
import { Observable } from 'rxjs';
import { HttpOptions } from '../../../../core/Interfaces/httpOptions/http-options';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private dni_user: String = '';

  constructor(private http: HttpClient, private auth: AuthService) { 

  }

  getUser(): Observable<PersonDto>{
    
    const options: HttpOptions = {
      headers: new HttpHeaders ({
        'Authorization': `Bearer ${this.auth.getToken()}`
      })
    }

    return this.http.get<PersonDto>(`${environment.serverAddress}/person`, options);
  }


  getDni() {
    return this.dni_user;
  }

  setDni(dni: String) {
    this.dni_user = dni;
  }
}