import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../../../Auth/Services/Auth-service/auth.service';
import { UserService } from '../../../../Services/UserService/user.service';
import { environment } from '../../../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private http: HttpClient
  ) { }


  getLaborTutor() {
    return this.http.get(environment.serverAddress + "/labor-tutor/", this.authService.getHeadersToken());
  }

  getTeachers() {
    return this.http.get(environment.serverAddress + "/teacher/", this.authService.getHeadersToken());
  }

  getStudents() {
    return this.http.get(environment.serverAddress + "/student/", this.authService.getHeadersToken());
  }

  removeStudent(dni: string) {
    return this.http.delete(environment.serverAddress + "/student/" + dni, this.authService.getHeadersToken());
  }

  removeTeacher(dni: string) {
    return this.http.delete(environment.serverAddress + "/teacher/" + dni, this.authService.getHeadersToken());
  }

  removeLaborTutor(dni: string) {
    return this.http.delete(environment.serverAddress + "/labor-tutor/" + dni, this.authService.getHeadersToken());
  }


}
