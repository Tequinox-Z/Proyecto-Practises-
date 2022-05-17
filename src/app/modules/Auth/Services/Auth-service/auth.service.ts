import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginResponse } from '../../../../core/Interfaces/login-response/login-response';
import { UserLoginRequest } from '../../../../core/Interfaces/user-login-request/user-login-request';
import { environment } from '../../../../../environments/environment';
import * as CryptoJS from 'crypto-js';
import { HttpOptions } from '../../../../core/Interfaces/httpOptions/http-options';
import { PersonDto } from '../../../../core/Interfaces/personDto/person-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { 
    
  }

  /**
   * Comprueba que el token sea válido
   * @returns Boolean si el token es válido
   */
  isValidToken() {
    let token = localStorage.getItem('token') + '';                                        // Obtenemos el token

    if (token == null) {
      this.router.navigate(['welcome']);                                                   // Si no tiene token navega a la navegación
    }

    return this.sendToken(token);                                                          // Envía el token para que sea validado y retorna una respuesta
  }

  /**
   * Inicia sesión de un usuario
   * @param user : Usuario
   * @returns : Observable
   */
  login(user: UserLoginRequest) {

    let userEncrypt: UserLoginRequest = {
      "dni": user.dni,                                                                             // Creamos un objeto con el dni de usuario
      "password": CryptoJS.MD5(user.password).toString()                                           // Encriptamos la contraseña
    };

    return this.http.post<LoginResponse>(environment.serverAddress + "/auth/login", userEncrypt);  // Lanzamos la petición y retornamos la respuesta
  }

  /**
   * Cierra sesión
   */
  logout() {
    localStorage.removeItem('token');                                                        // Borra el token 
    this.router.navigate(['welcome']);                                                       // Navega a la pantalla de bienvenida
  }

  /**
   * Establece el token del usuario
   * @param token : Token del usuario
   */
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  /**
   * Obtiene el token
   * @returns Token del usuario
   */
  getToken() {
    return localStorage.getItem('token');
  }

  /**
   * 
   * @param user Registra un usuario
   * @returns Observable
   */
  register(user: UserLoginRequest) {
    user.password = CryptoJS.MD5(user.password).toString();                                     // Encriptamos la contraseña             
    return this.http.post(environment.serverAddress + "/auth/register", user);                  // Lanzamos la petición y devolvemos el observable
  }

  /**
   * Envía el token
   * @param token : Token a comprobar
   * @returns Observable
   */
  private async sendToken(token: string) {

    return await this.http.get(environment.serverAddress + '/auth/checktoken', this.getHeadersToken()).toPromise()  // Lanzamos la petición
    .then(() => {
        return true;                                                                                 // Si es válido retornamos true
    })
    .catch(() => {
        localStorage.removeItem('token');                                                            // Si no es válido quitamos el token
        this.router.navigate(['welcome']);                                                           // Navegamos a la pantalla de bienvenida
        return false;
    })
  }

  getHeadersToken(): HttpOptions {
    let options: HttpOptions = {
      headers: new HttpHeaders ({
        'Authorization': `Bearer ${this.getToken()}`
      })
    }

    return options;
  }


  restorePassword(person : PersonDto) {
    //
  }
}