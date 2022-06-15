import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../modules/Auth/Services/Auth-service/auth.service';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RouteNavigationServiceService {

  constructor(
    private http: HttpClient, 
    private authService: AuthService) {
  }

  getRoute(start1: number, start2: number, end1: number, end2: number) {
    return this.http.get(environment.routeMap + start1 + "," + start2 + ";" + end1 + "," + end2 + "?steps=true&geometries=geojson&access_token=" + environment.mapBoxToken);
  }
}
