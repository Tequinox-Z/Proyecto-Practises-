import { Injectable } from '@angular/core';
import { AuthService } from '../../../modules/Auth/Services/Auth-service/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor (
    private http: HttpClient, 
    private authService: AuthService
  ) { }

  getAllStudents() {
    return this.http.get(environment.serverAddress + "/student/", this.authService.getHeadersToken());
  }
}
