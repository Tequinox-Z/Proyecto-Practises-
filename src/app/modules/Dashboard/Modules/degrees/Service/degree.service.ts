import { Injectable } from '@angular/core';
import { School } from '../../../../../core/Interfaces/school/school';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../../Auth/Services/Auth-service/auth.service';
import { UserService } from '../../../Services/UserService/user.service';
import { environment } from '../../../../../../environments/environment';
import { ProfessionalDegree } from '../../../../../core/Interfaces/ProfessionalDegree/ProfessionalDegree';
import { Business } from '../../../../../core/Interfaces/business/Business';
import { Student } from '../../../../../core/Interfaces/student/student';
import { Teacher } from '../../../../../core/Interfaces/teacher/teacher';
import { Enrollment } from 'src/app/core/Interfaces/Enrollment/Enrollment';

@Injectable({
  providedIn: 'root'
})
export class DegreeService {

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private http: HttpClient
  ) { }


  public getDegreesByYear(school: School, year: string) {
      return this.http.get(environment.serverAddress + "/school/" + school.id + "/degree?year=" + year, this.authService.getHeadersToken());
  }

  public deleteDegree(school: School, idDegree: number) {
    return this.http.delete(environment.serverAddress + "/school/" + school.id + "/degree/" + idDegree, this.authService.getHeadersToken());
  }

  public getYears(school: School) {
    return this.http.get(environment.serverAddress + "/school/" + school.id + "/degree-years", this.authService.getHeadersToken());
  }


  public getDegree(school: School, idDegree: number) {
    return this.http.get(environment.serverAddress + "/degree/" + idDegree, this.authService.getHeadersToken());
  }

  public getByDegreeOnly(idDegree: number) {
    return this.http.get(environment.serverAddress + "/degree/" + idDegree, this.authService.getHeadersToken());
  }


  public updateDegree(school: School, degree: ProfessionalDegree) {
    return this.http.put(environment.serverAddress +  "/school/" + school.id + "/degree/" + degree.id, degree, this.authService.getHeadersToken());
  }


  public addDegree(school: School) {

    let degree: ProfessionalDegree = {};

    degree.image = "https://i.pinimg.com/originals/c2/4b/11/c24b1132d7cb060da9738c28a83ec6c4.png";
    degree.year = new Date().getFullYear();
    degree.name = "Nuevo ciclo";

    return this.http.post(environment.serverAddress +  "/school/" + school.id + "/degree", degree, this.authService.getHeadersToken());
  }

  public getBusinessFromDegree(degree: ProfessionalDegree) {
    return this.http.get(environment.serverAddress +  "/degree/" + degree.id + "/business", this.authService.getHeadersToken());
  }

  public getTeachersFromDegree(degree: ProfessionalDegree) {
    return this.http.get(environment.serverAddress +  "/degree/" + degree.id + "/teacher", this.authService.getHeadersToken());
  }

  public getStudentsFromDegree(degree: ProfessionalDegree) {
    return this.http.get(environment.serverAddress +  "/degree/" + degree.id + "/enrollment", this.authService.getHeadersToken());
  }

  public quitFromDegree(degree: ProfessionalDegree, cif: string) {
    return this.http.delete(environment.serverAddress +  "/degree/" + degree.id + "/business/" + cif, this.authService.getHeadersToken());
  }

  public quitTeacherFromDegree(degree: ProfessionalDegree, cif: string) {
    return this.http.delete(environment.serverAddress +  "/degree/" + degree.id + "/teacher/" + cif, this.authService.getHeadersToken());
  }

  public addBusiness(degree: ProfessionalDegree, cif: string) {
    let business : Business = {};

    business.cif = cif;

    return this.http.post(environment.serverAddress +  "/degree/" + degree.id + "/business/", business, this.authService.getHeadersToken());
  }

  public quitEnrollmentFromDegree(degree: ProfessionalDegree, idEnrolment: number) {
    return this.http.delete(environment.serverAddress +  "/degree/" + degree.id + "/enrollment/" + idEnrolment, this.authService.getHeadersToken());
  }

  public addTeacherToDegree(degree: ProfessionalDegree, dni: string) {

    let teacher: Teacher = {};

    teacher.dni = dni;

    return this.http.post(environment.serverAddress +  "/degree/" + degree.id + "/teacher/", teacher, this.authService.getHeadersToken());
  }


  public addStudentToDegree(degree: ProfessionalDegree, dni: string) {

    let enrollment : Enrollment = {};

    enrollment.date = new Date();
    enrollment.dniStudent = dni;

    return this.http.post(environment.serverAddress +  "/degree/" + degree.id + "/enrollment/", enrollment, this.authService.getHeadersToken());    
  }
}