import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../../environments/environment';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { catchError, map, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Validate implements AsyncValidator {

  constructor(private http: HttpClient) { }

    /**
     * Valida que el dni no esté registrado
     * @param control 
     * @returns 
     */
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const dni = control.value; 
    return this.http.get(environment.serverAddress + "/exist-person/" + dni)
      .pipe(
        map (resp => {
          return {dni: true}
        }),
        catchError (err => {
           return of(null)
        })
      );
  }
}
