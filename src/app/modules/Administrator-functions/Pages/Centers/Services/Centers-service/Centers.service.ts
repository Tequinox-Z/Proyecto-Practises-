import { Injectable } from '@angular/core';
import { environment } from '../../../../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { School } from 'src/app/core/Interfaces/school/school';
import { Observable } from 'rxjs';
import { AuthService } from '../../../../../Auth/Services/Auth-service/auth.service';
import { HttpOptions } from 'src/app/core/Interfaces/httpOptions/http-options';
import { UserService } from '../../../../../Dashboard/Services/UserService/user.service';
import { Administrator } from '../../../../../../core/Interfaces/administrator/administrator';
import { ProfessionalDegree } from '../../../../../../core/Interfaces/professionalDegree/professional-degree';
import * as CryptoJS from 'crypto-js';
import { PersonDto } from '../../../../../../core/Interfaces/personDto/person-dto';


@Injectable({
  providedIn: 'root'
})
export class CentersService {

  constructor(private http: HttpClient, private auth: AuthService, private userService: UserService) { }
  
  /**
   * Obtiene el centro que administra el administrador
   * @param dni : Dni del usuario
   * @returns Observable escuela
   */
  getMyCenter(dni: String): Observable<School> {

    const options: HttpOptions = {
      headers: new HttpHeaders ({
        'Authorization': `Bearer ${this.auth.getToken()}`
      })
    }

    return this.http.get<School>(environment.serverAddress + '/administrator/' + dni + '/school', options);            // Lanzamos la petición
  }

  /**
   * Obtiene todos los centros por nombre
   * @param text : Texto
   * @returns Observable de escuela
   */
  getAllByName(text: string): Observable<School[]> {
    const options: HttpOptions = {
      headers: new HttpHeaders ({
        'Authorization': `Bearer ${this.auth.getToken()}`
      })
    }

    return this.http.get<School[]>(`${environment.serverAddress}/school?name=${text}`, options);                        // Lanzamos la petición
  }

  /**
   * Obtiene todos los centros
   * @returns Lista de centros
   */
  getAll(): Observable<School[]> {
    const options: HttpOptions = {
      headers: new HttpHeaders ({
        'Authorization': `Bearer ${this.auth.getToken()}`
      })
    }

    return this.http.get<School[]>(environment.serverAddress + '/school', options);                                                      // Lanzamos la petición
  }

  /**
   * Establece el centro por defecto
   * @param idCenter: Identificador del centro
   * @returns Observable de colegio
   */
  setCenter(idCenter: string): Observable<School> {
    const options: HttpOptions = {
      headers: new HttpHeaders ({
        'Authorization': `Bearer ${this.auth.getToken()}`
      })
    }

    let administrator: PersonDto = {
      "dni": this.userService.getDni().toString()                                                                                       // Creamos un objeto con el dni del usuario
    };

    return this.http.post<School>(environment.serverAddress + '/school/' + idCenter + '/administrator', administrator , options);       // Lanzamos la petición
  }

  /**
   * Obtiene un centro determinado
   * @param idCenter : Identificador del centro
   * @returns Observable del centro
   */
  getCenter(idCenter: string): Observable<School> {

    const options: HttpOptions = {
      headers: new HttpHeaders ({
        'Authorization': `Bearer ${this.auth.getToken()}`                                                                                
      })
    }

    return this.http.get<School>(environment.serverAddress + '/school/' + idCenter, options);                                            // Lanzamos la petición
  }

  /**
   * Obtiene los administradores de un centro
   * @param idCenter : Identificador del centro
   * @returns Observable de administradores
   */
  getAdministratorsFromCenter(idCenter: string): Observable<Administrator[]> {
    const options: HttpOptions = {
      headers: new HttpHeaders ({
        'Authorization': `Bearer ${this.auth.getToken()}`
      })
    }

    return this.http.get<Administrator[]>(`${environment.serverAddress}/school/${idCenter}/administrator`, options);                      // Lanzamos la petición
  }

  /**
   * Obtiene los ciclos de un centro
   * @param idCenter 
   * @returns 
   */
  getProfessionalDegreesFromCenter(idCenter: string): Observable<ProfessionalDegree[]> {

    const options: HttpOptions = {
      headers: new HttpHeaders ({
        'Authorization': `Bearer ${this.auth.getToken()}`
      })
    }

    return this.http.get<ProfessionalDegree[]>(`${environment.serverAddress}/school/${idCenter}/professionalDegree`, options);            // Lanzamos la petición
  }

  newCenter(school: School) {
    const options: HttpOptions = {
      headers: new HttpHeaders ({
        'Authorization': `Bearer ${this.auth.getToken()}`
      })
    }

    let newSchool: School = {
      name: school.name,
      address: school.address,
      password: CryptoJS.MD5(school.password + '').toString(),                                                                            // Creamos la escuela encriptando la contraseña
      administrators: school.administrators
    };

    return this.http.post<School>(environment.serverAddress + '/school/', newSchool , options);                                          // Lanzamos la petición

  }
}
