import { Injectable } from '@angular/core';
import { UserService } from '../../../Services/UserService/user.service';
import { AuthService } from '../../../../Auth/Services/Auth-service/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CenterService {

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private http: HttpClient
    ) {}


  getCenterOfAdministrator() {
    return this.http.get(environment.serverAddress + "/administrator/" + this.userService.getDni() + "/school", this.authService.getHeadersToken());
  }

  getAllCenters() {
    return this.http.get(environment.serverAddress + "/school/", this.authService.getHeadersToken());
  }

  getCentersByName(name: String) {
    return this.http.get(environment.serverAddress + "/school/?name=" + name, this.authService.getHeadersToken());
  }

  getAllLocations() {
    return this.http.get(environment.serverAddress + "/location/schools", this.authService.getHeadersToken());
  }
}
