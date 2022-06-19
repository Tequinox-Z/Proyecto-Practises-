import { Injectable } from '@angular/core';
import { UserService } from '../../../Services/UserService/user.service';
import { AuthService } from '../../../../Auth/Services/Auth-service/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment';
import { AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { catchError, delay, EMPTY, map, Observable } from 'rxjs';
import { Business } from '../../../../../core/Interfaces/business/Business';
import { Location } from 'src/app/core/Interfaces/Location/Location';


// Servicio de empresa

@Injectable({
  providedIn: 'root'
})
export class BusinessService implements AsyncValidator {

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private http: HttpClient
  ) { }


  // Obtiene todas las empresas

  getAllBusiness() {
    return this.http.get(environment.serverAddress + "/business/", this.authService.getHeadersToken());
  }

  // Obtiene todas las empresas por nombre

  getBusinessByName(name: String) {
    return this.http.get(environment.serverAddress + "/location/business/?name=" + name, this.authService.getHeadersToken());
  }

  // Obtiene todas las localizaciones

  getAllLocations() {
    return this.http.get(environment.serverAddress + "/location/business/", this.authService.getHeadersToken());
  }

  // Valida si existe la empresa

  validate( control: AbstractControl): Observable<ValidationErrors | null> {
    return this.http.get<any>(environment.serverAddress + "/exist-business/" + control.value, this.authService.getHeadersToken())
    .pipe(
      delay(1500),
      map(resp => {

        let business : Business[] = resp;                      // Obtenemos la respuesta

        if (business.length == 0) {
          control.get("cif")?.setErrors(null);                 // Si no hay empresas indicamos que no hay error
          return null;
        }
        else {
          control.get("cif")?.setErrors({ exist: true });      // Si hay indicamos que hay error
          return { exist : true };
        }
      }),
      catchError(error => {
        return EMPTY;                                          // En caso de error, respuesta vacía
      })
    );
  }

  // Crea una nueva empresa

  createBusiness(business: Business) {
    return this.http.post(environment.serverAddress + "/business/", business , this.authService.getHeadersToken());
  }

  // Establece una nueva ubicación

  setUbication(business: Business, ubication: Location) {
    return this.http.post(environment.serverAddress + "/business/" + business.cif + "/ubication/", ubication, this.authService.getHeadersToken());
  }

  // Obtiene la empresa

  getBusiness(cif: string) {
    return this.http.get(environment.serverAddress + "/business/" + cif, this.authService.getHeadersToken());
  }

  // Obtiene la ubicación

  getUbication(business: Business) {
    return this.http.get(environment.serverAddress + "/business/" + business.cif + "/ubication", this.authService.getHeadersToken());
  }

  // Edita una ubicación

  editUbication(business: Business) {
    return this.http.put(environment.serverAddress + "/business/" + business.cif + "/ubication", business.location, this.authService.getHeadersToken());
  }

  // Edita una empresa

  editBusiness(business : Business) {
    return this.http.put(environment.serverAddress + "/business/" + business.cif, business, this.authService.getHeadersToken());
  }

  // Establece un tutor
  
  setBusinessToTutor(dni: string, business : Business) {
    return this.http.post(environment.serverAddress + "/labor-tutor/" + dni + "/business", business, this.authService.getHeadersToken());
  }

}
