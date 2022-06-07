import { Injectable } from '@angular/core';
import { UserService } from '../../../Services/UserService/user.service';
import { AuthService } from '../../../../Auth/Services/Auth-service/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

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

}
