import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { AuthService } from '../../../modules/Auth/Services/Auth-service/auth.service';


// Servicio de profesores


@Injectable({
  providedIn: 'root'
})
export class TeacherServiceService {

constructor(private http: HttpClient, private authService: AuthService) { }
  
  // Obtiene todos los profesores

  getAllTeachers() {
    return this.http.get(environment.serverAddress + "/teacher/", this.authService.getHeadersToken());
  }

  
}
