import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/modules/Auth/Services/Auth-service/auth.service';


// ====================================================== Guardián ======================================================

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor (private authService: AuthService) {

  }

  // Checkea si tiene un token válido

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isValidToken();                                                              // Checkeamos si el token es válido
  }
  
}
