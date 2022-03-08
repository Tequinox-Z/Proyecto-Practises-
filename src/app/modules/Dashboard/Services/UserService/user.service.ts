import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../../Auth/Services/Auth-service/auth.service';
import { PersonDto } from '../../../../core/Interfaces/personDto/person-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private dni_user: String = '';

  constructor(private http: HttpClient, private auth: AuthService) { 

  }

  /**
   * Obtiene un usuario
   * @returns Observable de persona
   */
  getUser(): Observable<PersonDto>{
    return this.http.get<PersonDto>(`${environment.serverAddress}/person`, this.auth.getHeadersToken());
  }


  /**
   * Obtiene el dni de la persona
   * @returns Dni
   */
  getDni() {
    return this.dni_user;
  }

  /**
   * Establece el dni 
   * @param dni Establece el dni de la persona
   */
  setDni(dni: String) {
    this.dni_user = dni;
  }
}