import { Injectable } from '@angular/core';
import { PersonDto } from '../../../../core/Interfaces/personDto/person-dto';
import { HttpOptions } from '../../../../core/Interfaces/httpOptions/http-options';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthService } from '../../../Auth/Services/Auth-service/auth.service';
import { Teacher } from '../../../../core/Interfaces/teacher/teacher';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private auth: AuthService, private http: HttpClient) { 

  }

}
