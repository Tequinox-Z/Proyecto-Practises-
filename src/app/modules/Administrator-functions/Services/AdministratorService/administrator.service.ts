import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../../Auth/Services/Auth-service/auth.service';
import { HttpOptions } from '../../../../core/Interfaces/httpOptions/http-options';
import { environment } from '../../../../../environments/environment';
import { Administrator } from '../../../../core/Interfaces/administrator/administrator';

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {

  constructor(private http: HttpClient, private auth: AuthService) { 

  }

  /**
   * Obtiene todos los administradores
   * @returns 
   */
  getAll() {
    return this.http.get<Administrator[]>(environment.serverAddress + '/administrator', this.auth.getHeadersToken());            // Lanza la petición y devuelve la respuesta
  }
}
