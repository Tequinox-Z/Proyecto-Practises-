import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map, catchError } from 'rxjs';
import { UserService } from '../../../modules/Dashboard/Services/UserService/user.service';
import { CenterService } from '../../../modules/Dashboard/Modules/center/Service/center.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class NoCenterSettedAdminGuard implements CanActivate, CanDeactivate<unknown> {

  constructor (
      private userSrv: UserService, 
      private centerService: CenterService
    ) {
  }

  canActivate (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

  // Evita que el administrador salga de la selección de centro si no administra ninguno

  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    // Si el usuario quiere cerrar sesión lo dejamos salir

    if (nextState!.url == "/" || nextState?.url == "/dashboard/center/new-center" || nextState?.url == "/dashboard/center/centers") {
      return true;
    }

    // Si es administrador comprobamos si administra ya un centro y de esta forma decidimo si dejarlo salir o no

    if (this.userSrv.getPerson()!.rol?.toString() == "ROLE_ADMIN") {
       return this.centerService.getCenterOfAdministrator().toPromise()
       .then(res => {
         return true;
       }
       ).catch(res => {

        // En caso de que no pueda salir le avisamos

        Swal.fire({
          icon: 'error',
          title: 'Antes de comenzar...',
          text: 'Debes de seleccionar el centro que vas a administrar o registrar el tuyo'
        });
        
         return false;
       })
       
    }
    else {
      return true;
    }
  }
  
}
