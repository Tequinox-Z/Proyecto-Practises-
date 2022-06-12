import { Injectable } from '@angular/core';
import { UserService } from '../../../Services/UserService/user.service';
import { AuthService } from '../../../../Auth/Services/Auth-service/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment';
import { AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { catchError, delay, EMPTY, map, Observable } from 'rxjs';
import { Business } from '../../../../../core/Interfaces/business/Business';
import { Location } from 'src/app/core/Interfaces/Location/Location';


@Injectable({
  providedIn: 'root'
})
export class BusinessService implements AsyncValidator {

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private http: HttpClient
  ) { }


  getAllBusiness() {
    return this.http.get(environment.serverAddress + "/business/", this.authService.getHeadersToken());
  }

  getBusinessByName(name: String) {
    return this.http.get(environment.serverAddress + "/location/business/?name=" + name, this.authService.getHeadersToken());
  }

  getAllLocations() {
    return this.http.get(environment.serverAddress + "/location/business/", this.authService.getHeadersToken());
  }

  validate( control: AbstractControl): Observable<ValidationErrors | null> {
    return this.http.get<any>(environment.serverAddress + "/exist-business/" + control.value, this.authService.getHeadersToken())
    .pipe(
      delay(1500),
      map(resp => {

        let business : Business[] = resp;

        if (business.length == 0) {
          control.get("cif")?.setErrors(null);
          return null;
        }
        else {
          control.get("cif")?.setErrors({ exist: true });
          return { exist : true };
        }
      }),
      catchError(error => {
        return EMPTY;
      })
    );
  }

  createBusiness(business: Business) {
    return this.http.post(environment.serverAddress + "/business/", business , this.authService.getHeadersToken());
  }

  setUbication(business: Business, ubication: Location) {
    return this.http.post(environment.serverAddress + "/business/" + business.cif + "/ubication/", ubication, this.authService.getHeadersToken());
  }

}
