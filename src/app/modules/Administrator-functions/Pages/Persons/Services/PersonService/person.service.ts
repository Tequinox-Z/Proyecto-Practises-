import { Injectable } from '@angular/core';
import { PersonDto, Rol } from '../../../../../../core/Interfaces/personDto/person-dto';
import * as CryptoJS from 'crypto-js';
import { HttpOptions } from '../../../../../../core/Interfaces/httpOptions/http-options';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthService } from '../../../../../Auth/Services/Auth-service/auth.service';
import { environment } from '../../../../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(
      private auth: AuthService,
      private http: HttpClient
  ) { }

  createNewPerson(newPerson: PersonDto) {
    newPerson.password = CryptoJS.MD5(newPerson.password + '').toString();
    
     const options: HttpOptions = {
      headers: new HttpHeaders ({
        'Authorization': `Bearer ${this.auth.getToken()}`
      })
    }
    
    return this.http.post<PersonDto>(environment.serverAddress + '/auth/register', newPerson , options);
  }
  
}
