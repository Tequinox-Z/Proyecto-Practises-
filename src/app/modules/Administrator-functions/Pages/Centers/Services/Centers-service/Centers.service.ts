import { Injectable } from '@angular/core';
import { environment } from '../../../../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { School } from 'src/app/core/Interfaces/school/school';
import { Observable } from 'rxjs';
import { AuthService } from '../../../../../Auth/Services/Auth-service/auth.service';
import { HttpOptions } from 'src/app/core/Interfaces/httpOptions/http-options';
import { UserService } from '../../../../../Dashboard/Services/UserService/user.service';

@Injectable({
  providedIn: 'root'
})
export class CentersService {

  constructor(private http: HttpClient, private auth: AuthService, private userService: UserService) { }

  getMyCenter(dni: String): Observable<School> {

    const options: HttpOptions = {
      headers: new HttpHeaders ({
        'Authorization': `Bearer ${this.auth.getToken()}`
      })
    }

    // Objeto school

    return this.http.get<School>(environment.serverAddress + '/administrator/' + dni + '/school', options);
  }


  getAll(): Observable<School[]> {

    const options: HttpOptions = {
      headers: new HttpHeaders ({
        'Authorization': `Bearer ${this.auth.getToken()}`
      })
    }

    return this.http.get<School[]>(environment.serverAddress + '/school', options);
  }


  setCenter(idCenter: string) {
    const options: HttpOptions = {
      headers: new HttpHeaders ({
        'Authorization': `Bearer ${this.auth.getToken()}`
      })
    }

    let school = {
      "id": idCenter
    };

    return this.http.post<School>(environment.serverAddress + '/administrator/' + this.userService.getDni() + '/school', school , options);
  }

}
