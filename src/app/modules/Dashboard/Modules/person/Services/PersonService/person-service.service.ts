import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../../../Auth/Services/Auth-service/auth.service';
import { UserService } from '../../../../Services/UserService/user.service';
import { environment } from '../../../../../../../environments/environment';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { catchError, delay, EMPTY, map, Observable } from 'rxjs';
import { PersonDto } from '../../../../../../core/Interfaces/personDto/person-dto';

@Injectable({
  providedIn: 'root'
})
export class PersonServiceService implements AsyncValidator {

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private http: HttpClient
  ) { }


  validate( control: AbstractControl): Observable<ValidationErrors | null> {
    return this.http.get<any>(environment.serverAddress + "/exist-person/" + control.value, this.authService.getHeadersToken())
    .pipe(
      delay(1500),
      map(resp => {
        if (resp.mensaje == '') {
          control.get("dni")?.setErrors(null);
          return null;
        }
        else {
          control.get("dni")?.setErrors({ exist: true });
          return { exist : true };
        }
      }),
      catchError(error => {
        return EMPTY;
      })
    );
  }

  createPerson(person : PersonDto) {
    return this.http.post(environment.serverAddress + "/auth/register/", person, this.authService.getHeadersToken());
  }

  disable(dni: string) {
    let person : PersonDto = {};
    person.dni = dni;

    return this.http.post(environment.serverAddress + "/disable-user", person, this.authService.getHeadersToken());
  }

  enable(dni: string) {
    let person : PersonDto = {};
    person.dni = dni;
    
    return this.http.post(environment.serverAddress + "/enable-user/", person, this.authService.getHeadersToken());
  }


  getLaborTutor() {
    return this.http.get(environment.serverAddress + "/labor-tutor/", this.authService.getHeadersToken());
  }

  getTeachers() {
    return this.http.get(environment.serverAddress + "/teacher/", this.authService.getHeadersToken());
  }

  getStudentsFind(query: String) {
    return this.http.get(environment.serverAddress + "/student?name=" + query, this.authService.getHeadersToken());
  }

  getLaborTutorFind(query: String) {
    return this.http.get(environment.serverAddress + "/labor-tutor?name=" + query, this.authService.getHeadersToken());
  }

  getTeachersFind(query: String) {
    return this.http.get(environment.serverAddress + "/teacher?name=" + query, this.authService.getHeadersToken());
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

  getPersonByDni(dni: string) {
    return this.http.get(environment.serverAddress + "/person/" + dni, this.authService.getHeadersToken());
  }

  editTeacher(person: PersonDto) {
    return this.http.put(environment.serverAddress + "/teacher/" + person.dni, person, this.authService.getHeadersToken());
  }
  editAdmin(person: PersonDto) {
    return this.http.put(environment.serverAddress + "/administrator/" + person.dni, person, this.authService.getHeadersToken());
  }
  editStudent(person: PersonDto) {
    return this.http.put(environment.serverAddress + "/student/" + person.dni, person, this.authService.getHeadersToken());
  }
  editTutor(person: PersonDto) {
    return this.http.put(environment.serverAddress + "/labor-tutor/" + person.dni, person, this.authService.getHeadersToken());
  }
}
