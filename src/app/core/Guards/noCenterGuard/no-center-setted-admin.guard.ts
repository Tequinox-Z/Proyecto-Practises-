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

  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      console.log(nextState?.url);


    if (nextState!.url == "/" || nextState?.url == "/dashboard/center/new-center" || nextState?.url == "/dashboard/center/centers") {
      return true;
    }

    if (this.userSrv.getPerson()!.rol?.toString() == "ROLE_ADMIN") {
       return this.centerService.getCenterOfAdministrator().toPromise()
       .then(res => {
         return true;
       }
       ).catch(res => {
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
