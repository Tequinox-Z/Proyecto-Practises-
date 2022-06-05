import { Injectable } from '@angular/core';
import { UserService } from '../../../Services/UserService/user.service';
import { AuthService } from '../../../../Auth/Services/Auth-service/auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private http: HttpClient
  ) { }


  getAllBusiness() {

  }
}
