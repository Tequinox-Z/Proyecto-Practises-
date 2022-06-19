import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../../Auth/Services/Auth-service/auth.service';
import { PersonDto, Rol } from '../../../../core/Interfaces/personDto/person-dto';
import { Observable } from 'rxjs';


// Servicio de usuario

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private person!: PersonDto | null;                              // Persona actual
  private config = null;                                          // Configuración
  
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
    return this.person!.dni;
  }

  /**
   * Establece el dni 
   * @param dni Establece el dni de la persona
   */
  setDni(dni: string) {
    this.person!.dni = dni;
  }

  // Establece la contraseña del usuario

  setPassword(password: string, token ?: string | null) {
      if (token == undefined) {
        token = this.auth.getToken();
      }
  
      return this.http.post(`${environment.serverAddress}/configure-new-password`, {"password": password} , this.auth.getHeadersToken(token));  
  }


  // Establece la persona

  setPerson(newPerson: PersonDto | null) {
    this.person = newPerson;
  }


  // Obtiene la persona
  
  getPerson() {
    return this.person;
  }
}