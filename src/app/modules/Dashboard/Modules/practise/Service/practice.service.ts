import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../../Auth/Services/Auth-service/auth.service';
import { UserService } from '../../../Services/UserService/user.service';
import { environment } from '../../../../../../environments/environment';
import { Practise } from '../../../../../core/Interfaces/Practise/Practise';
import { Business } from '../../../../../core/Interfaces/business/Business';
import { LaborTutor } from '../../../../../core/Interfaces/LaborTutor/LaborTutor';
import { Teacher } from '../../../../../core/Interfaces/teacher/teacher';


// Servicio de prácticas


@Injectable({
  providedIn: 'root'
})
export class PracticeService {

  constructor (

    private userService: UserService,
    private authService: AuthService,
    private http: HttpClient
  
  ) { }


  // Obtiene una matricula

  getEnrollment(idEnrollment :number) {
    return this.http.get(environment.serverAddress + "/enrollment/" + idEnrollment , this.authService.getHeadersToken());  
  }


  // Comienza una práctica

  startPractise(idEnrollment: number) {
    return this.http.post(environment.serverAddress + "/enrollment/" + idEnrollment + "/practise", {} , this.authService.getHeadersToken());  
  }


  // Actualiza una practica

  updatePractise(practise: Practise) {
    return this.http.put(environment.serverAddress + "/practise/" + practise.id, practise , this.authService.getHeadersToken());   
  }

  // Establece una empresa

  setBusiness(cif: string, idPractise: number) {
    let business: Business = {};
    business.cif = cif;

    return this.http.post(environment.serverAddress + "/practise/" + idPractise + "/business", business, this.authService.getHeadersToken());  
  }

  // Edita una empresa

  editBusiness(cif: string, idPractise: number) {
    let business: Business = {};
    business.cif = cif;

    return this.http.put(environment.serverAddress + "/practise/" + idPractise + "/business", business, this.authService.getHeadersToken());  
  }


  // Obtiene una empresa

  getBusiness(practise: number) {
    return this.http.get(environment.serverAddress + "/practise/" + practise + "/business" , this.authService.getHeadersToken());
  }

  // Obtiene un profesor

  getTeacher(practise: number) {
    return this.http.get(environment.serverAddress + "/practise/" + practise + "/teacher" , this.authService.getHeadersToken());
  }

  // Obtiene un tutor

  getTutor(practise: number) {
    return this.http.get(environment.serverAddress + "/practise/" + practise + "/labor-tutor" , this.authService.getHeadersToken());
  }

  // Edita un tutor

  editTutor(practise: Practise, dni: string) {

    let tutor : LaborTutor = {};

    tutor.dni = dni;

    return this.http.put(environment.serverAddress + "/practise/" + practise.id + "/labor-tutor", tutor, this.authService.getHeadersToken());
  }


  // Edita un profesor

  editTeacher(practise: Practise, dni: string) {
    let teacher : Teacher = {};

    teacher.dni = dni;

    return this.http.put(environment.serverAddress + "/practise/" + practise.id + "/teacher", teacher, this.authService.getHeadersToken());
  }

  // Quita un tutor

  quitLaborTutor(practise: Practise) {
    return this.http.delete(environment.serverAddress + "/practise/" + practise.id + "/labor-tutor", this.authService.getHeadersToken());
  }

  
}
