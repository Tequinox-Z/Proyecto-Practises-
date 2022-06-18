import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../../modules/Dashboard/Services/UserService/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdministratorGuard implements CanActivate {

  constructor(private userSrv :UserService) {

  }

  // Comprueba si el usuario actual es un administrador

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.userSrv.getPerson()?.rol?.toString() == "ROLE_ADMIN";
  }
  
}
