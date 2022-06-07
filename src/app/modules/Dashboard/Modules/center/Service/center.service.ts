import { Injectable } from '@angular/core';
import { UserService } from '../../../Services/UserService/user.service';
import { AuthService } from '../../../../Auth/Services/Auth-service/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment';
import { School } from '../../../../../core/Interfaces/school/school';
import { Location } from '../../../../../core/Interfaces/Location/Location';

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

  createCenter(school: School) {
    return this.http.post(environment.serverAddress + "/school", school, this.authService.getHeadersToken());
  }

  setLocation(school: School, location: Location) {
    return this.http.post(environment.serverAddress + "/school/" + school.id + "/location", location, this.authService.getHeadersToken());
  }

  setCurrentAdministrator(school: School) {
    return this.http.post(environment.serverAddress + "/administrator/" + this.userService.getDni() + "/school", school, this.authService.getHeadersToken());
  }


  briefing(school: School) {
    return this.http.get(environment.serverAddress + "/school/" + school.id + "/briefing", this.authService.getHeadersToken());
  }


  getUbication(school: School) {
    return this.http.get(environment.serverAddress + "/school/" + school.id + "/location", this.authService.getHeadersToken());
  }


  updateLocation(school : School) {
    return this.http.put(environment.serverAddress + "/school/" + school.id + "/location", school.location, this.authService.getHeadersToken());
  }


  updateCenter(school : School) {
    return this.http.put(environment.serverAddress + "/school/" + school.id, school, this.authService.getHeadersToken());
  }


  getMovementsBySchool(school: School) {
    return this.http.get(environment.serverAddress + "/school/" + school.id + "/movement", this.authService.getHeadersToken());
  }

  deleteAllMovement(school: School) {
    return this.http.delete(environment.serverAddress + "/school/" + school.id + "/movement", this.authService.getHeadersToken());
  }
}
