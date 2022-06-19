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


// Servicio de ciclos


@Injectable({
  providedIn: 'root'
})
export class DegreeService {

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private http: HttpClient
  ) { }


  // Obtiene los ciclos de un año
  public getDegreesByYear(school: School, year: string) {
      return this.http.get(environment.serverAddress + "/school/" + school.id + "/degree?year=" + year, this.authService.getHeadersToken());
  }

  // Borra un ciclo
  public deleteDegree(school: School, idDegree: number) {
    return this.http.delete(environment.serverAddress + "/school/" + school.id + "/degree/" + idDegree, this.authService.getHeadersToken());
  }

  // Obtiene los años de un ciclo
  public getYears(school: School) {
    return this.http.get(environment.serverAddress + "/school/" + school.id + "/degree-years", this.authService.getHeadersToken());
  }

  // Obtiene un ciclo
  public getDegree(school: School, idDegree: number) {
    return this.http.get(environment.serverAddress + "/degree/" + idDegree, this.authService.getHeadersToken());
  }

  // Obtiene solo el ciclo
  public getByDegreeOnly(idDegree: number) {
    return this.http.get(environment.serverAddress + "/degree/" + idDegree, this.authService.getHeadersToken());
  }


  // Actualiza un ciclo
  public updateDegree(school: School, degree: ProfessionalDegree) {
    return this.http.put(environment.serverAddress +  "/school/" + school.id + "/degree/" + degree.id, degree, this.authService.getHeadersToken());
  }


  // Añade un ciclo
  public addDegree(school: School) {

    let degree: ProfessionalDegree = {};

    degree.image = "https://i.pinimg.com/originals/c2/4b/11/c24b1132d7cb060da9738c28a83ec6c4.png";
    degree.year = new Date().getFullYear();
    degree.name = "Nuevo ciclo";

    return this.http.post(environment.serverAddress +  "/school/" + school.id + "/degree", degree, this.authService.getHeadersToken());
  }

  // Obtiene las empresas de un ciclo
  public getBusinessFromDegree(degree: ProfessionalDegree) {
    return this.http.get(environment.serverAddress +  "/degree/" + degree.id + "/business", this.authService.getHeadersToken());
  }

  // OBtiene los profesores de un ciclo
  public getTeachersFromDegree(degree: ProfessionalDegree) {
    return this.http.get(environment.serverAddress +  "/degree/" + degree.id + "/teacher", this.authService.getHeadersToken());
  }

  // Obtiene los estudiates de un ciclo
  public getStudentsFromDegree(degree: ProfessionalDegree) {
    return this.http.get(environment.serverAddress +  "/degree/" + degree.id + "/enrollment", this.authService.getHeadersToken());
  }

  // Quita una empresa de un ciclo
  public quitFromDegree(degree: ProfessionalDegree, cif: string) {
    return this.http.delete(environment.serverAddress +  "/degree/" + degree.id + "/business/" + cif, this.authService.getHeadersToken());
  }

  // QUita un profesor
  public quitTeacherFromDegree(degree: ProfessionalDegree, cif: string) {
    return this.http.delete(environment.serverAddress +  "/degree/" + degree.id + "/teacher/" + cif, this.authService.getHeadersToken());
  }

  // Añade una empresa
  public addBusiness(degree: ProfessionalDegree, cif: string) {
    let business : Business = {};

    business.cif = cif;

    return this.http.post(environment.serverAddress +  "/degree/" + degree.id + "/business/", business, this.authService.getHeadersToken());
  }


  // QUita una matricula
  public quitEnrollmentFromDegree(degree: ProfessionalDegree, idEnrolment: number) {
    return this.http.delete(environment.serverAddress +  "/degree/" + degree.id + "/enrollment/" + idEnrolment, this.authService.getHeadersToken());
  }

  // Añade un profesor al ciclo
  public addTeacherToDegree(degree: ProfessionalDegree, dni: string) {

    let teacher: Teacher = {};

    teacher.dni = dni;

    return this.http.post(environment.serverAddress +  "/degree/" + degree.id + "/teacher/", teacher, this.authService.getHeadersToken());
  }


  // Añade un estudiante al ciclo
  public addStudentToDegree(degree: ProfessionalDegree, dni: string) {

    let enrollment : Enrollment = {};

    enrollment.date = new Date();
    enrollment.dniStudent = dni;

    return this.http.post(environment.serverAddress +  "/degree/" + degree.id + "/enrollment/", enrollment, this.authService.getHeadersToken());    
  }
}