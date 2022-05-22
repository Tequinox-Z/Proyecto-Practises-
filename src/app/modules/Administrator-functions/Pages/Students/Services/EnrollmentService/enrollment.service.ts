import { Injectable } from '@angular/core';
import { Enrollment } from '../../../../../../core/Interfaces/enrollment/enrollment';
import { environment } from '../../../../../../../environments/environment';
import { AuthService } from '../../../../../Auth/Services/Auth-service/auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  constructor(private auth: AuthService, private http: HttpClient) { 

  }

  /**
   * Obtiene todas las matrículas
   * @returns Listado de matrículas
   */
  getAll() {
    return this.http.get<Enrollment[]>(environment.serverAddress + '/enrollment', this.auth.getHeadersToken());              // Lanzamos la petición
  }
}
