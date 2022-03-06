import { Injectable } from '@angular/core';
import { PersonDto } from '../../../../core/Interfaces/personDto/person-dto';
import { HttpOptions } from '../../../../core/Interfaces/httpOptions/http-options';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthService } from '../../../Auth/Services/Auth-service/auth.service';
import { Student } from '../../../../core/Interfaces/student/student';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private auth: AuthService, private http: HttpClient) {

  }

}
