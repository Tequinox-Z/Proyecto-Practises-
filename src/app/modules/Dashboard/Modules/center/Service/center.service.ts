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


  // Servicio de centros

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private http: HttpClient
    ) {}

  // Obtiene el centro de un administrador
  getCenterOfAdministrator() {
    return this.http.get(environment.serverAddress + "/administrator/" + this.userService.getDni() + "/school", this.authService.getHeadersToken());
  }

  // Obtiene todos los centros
  getAllCenters() {
    return this.http.get(environment.serverAddress + "/school/", this.authService.getHeadersToken());
  }

  // Obtiene todos los centros por nombre
  getCentersByName(name: String) {
    return this.http.get(environment.serverAddress + "/school/?name=" + name, this.authService.getHeadersToken());
  }

  // Obtiene todas las localizaciones
  getAllLocations() {
    return this.http.get(environment.serverAddress + "/location/schools", this.authService.getHeadersToken());
  }

  // Crea un nuevo centro
  createCenter(school: School) {
    return this.http.post(environment.serverAddress + "/school", school, this.authService.getHeadersToken());
  }

  // Establece una nueva ubicación
  setLocation(school: School, location: Location) {
    return this.http.post(environment.serverAddress + "/school/" + school.id + "/location", location, this.authService.getHeadersToken());
  }

  // Añade un administrador
  setCurrentAdministrator(school: School) {
    return this.http.post(environment.serverAddress + "/administrator/" + this.userService.getDni() + "/school", school, this.authService.getHeadersToken());
  }


  // Obtiene el informe
  briefing(school: School) {
    return this.http.get(environment.serverAddress + "/school/" + school.id + "/briefing", this.authService.getHeadersToken());
  }


  // Obtiene la ubicación
  getUbication(school: School) {
    return this.http.get(environment.serverAddress + "/school/" + school.id + "/location", this.authService.getHeadersToken());
  }

  // Actualiza la ubiación
  updateLocation(school : School) {
    return this.http.put(environment.serverAddress + "/school/" + school.id + "/location", school.location, this.authService.getHeadersToken());
  }


  // Actualiza un centro
  updateCenter(school : School) {
    return this.http.put(environment.serverAddress + "/school/" + school.id, school, this.authService.getHeadersToken());
  }


  // Obtiene los movimientos del centro
  getMovementsBySchool(school: School) {
    return this.http.get(environment.serverAddress + "/school/" + school.id + "/movement", this.authService.getHeadersToken());
  }

  // Borra los movimientos del centro
  deleteAllMovement(school: School) {
    return this.http.delete(environment.serverAddress + "/school/" + school.id + "/movement", this.authService.getHeadersToken());
  }

  // Obtiene los registros de temperatura
  getTemperature(school: School) {
    return this.http.get(environment.serverAddress + "/school/" + school.id + "/reg-temp", this.authService.getHeadersToken());
  }


  // Obtiene los administradores
  getAdministrators(schoolId: number) {
    return this.http.get(environment.serverAddress + "/school/" + schoolId + "/administrator", this.authService.getHeadersToken());
  }

  // Obtiene los ciclos de un centro
  getDegreesFromSchoolId(schoolId: number) {
    let year = new Date().getFullYear();

    return this.http.get(environment.serverAddress + "/school/" + schoolId + "/degree?year=" + year, this.authService.getHeadersToken());
  }


  // Obtiene los ciclos de un administrador
  getDegreesFromDni(dni: string) {
    return this.http.get(environment.serverAddress + "/teacher/" + dni + "/degree", this.authService.getHeadersToken());
  }

}
