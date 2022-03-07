import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../../../../Auth/Services/Auth-service/auth.service';
import { Business } from '../../../../../../core/Interfaces/business/Business';
import { HttpOptions } from '../../../../../../core/Interfaces/httpOptions/http-options';
import { environment } from '../../../../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  /**
   * Crea una nueva empresa
   * @param business 
   * @returns empresa
   */
   newBusiness(business: Business) {
    const options: HttpOptions = {
      headers: new HttpHeaders ({
        'Authorization': `Bearer ${this.auth.getToken()}`
      })
    }

    return this.http.post<Business>(environment.serverAddress + '/business', business , options);                                          // Lanzamos la petición
  }
}
