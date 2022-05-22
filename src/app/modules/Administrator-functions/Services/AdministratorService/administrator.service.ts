import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../../Auth/Services/Auth-service/auth.service';
import { environment } from '../../../../../environments/environment';
import { Administrator } from '../../../../core/Interfaces/administrator/administrator';
import { CentersService } from '../../Pages/Centers/Services/Centers-service/Centers.service';

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {

  constructor(private http: HttpClient, private auth: AuthService, private centerService: CentersService ) { 

  }

  /**
   * Obtiene todos los administradores
   * @returns 
   */
  getAll(idCenter: String) {
    return this.http.get<Administrator[]>(`${environment.serverAddress}/school/${idCenter}/administrator`, this.auth.getHeadersToken());            // Lanza la petición y devuelve la respuesta
  }

  removeFromSchool(dniAdministrator: string) {
    return this.http.delete(`${environment.serverAddress}/school/${this.centerService.getIdSchool()}/administrator/${dniAdministrator}`, this.auth.getHeadersToken());            // Lanza la petición y devuelve la respuesta
  }
}
