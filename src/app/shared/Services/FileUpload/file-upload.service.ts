import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';


// Servicio de subida de ficheros


@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  
  constructor(
    private http: HttpClient
  ) { }


  // Sube un fichero y retorna un observable

  upload(file: File): Observable<HttpEvent<any>> {
    // Construimos un form data

    const formData: FormData = new FormData();
    
    // Añadimos el fichero
    formData.append('file', file);

    // Hacemos la petición

    const req = new HttpRequest('POST', `${environment.serverFileAddress}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }

}
