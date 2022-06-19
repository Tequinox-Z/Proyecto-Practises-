import { Injectable } from '@angular/core';
import { AuthService } from '../../../modules/Auth/Services/Auth-service/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';


// Servicio de estudiantes

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor (
    private http: HttpClient, 
    private authService: AuthService
  ) { }

  // Obtiene todos los estudiantes
  
  getAllStudents() {
    return this.http.get(environment.serverAddress + "/student/", this.authService.getHeadersToken());
  }
}
