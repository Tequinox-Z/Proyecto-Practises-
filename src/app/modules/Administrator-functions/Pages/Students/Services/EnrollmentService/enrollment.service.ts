import { Injectable } from '@angular/core';
import { Enrollment } from '../../../../../../core/Interfaces/enrollment/enrollment';
import { environment } from '../../../../../../../environments/environment';
import { AuthService } from '../../../../../Auth/Services/Auth-service/auth.service';
import { HttpOptions } from '../../../../../../core/Interfaces/httpOptions/http-options';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  constructor(private auth: AuthService, private http: HttpClient) { 

  }

  /**
   * Obtiene todas las matrículas
   * @returns 
   */
  getAll() {
    const options: HttpOptions = {
      headers: new HttpHeaders ({
        'Authorization': `Bearer ${this.auth.getToken()}`                                                // Indicamos el token
      })
    }

    return this.http.get<Enrollment[]>(environment.serverAddress + '/enrollment', options);              // Lanzamos la petición
  }
}
