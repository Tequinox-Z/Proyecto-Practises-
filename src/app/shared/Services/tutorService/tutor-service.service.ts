import { Injectable } from '@angular/core';
import { AuthService } from '../../../modules/Auth/Services/Auth-service/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TutorServiceService {

  constructor(private http: HttpClient, private authService: AuthService) { }


  getTutors(cif: string) {
    return this.http.get(environment.serverAddress + "/business/" + cif + "/labor-tutor", this.authService.getHeadersToken());
  }


  getTutorsFree() {
    return this.http.get(environment.serverAddress + "/labor-tutor/free", this.authService.getHeadersToken());
  }
  
}
