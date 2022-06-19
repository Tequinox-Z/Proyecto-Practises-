import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { FileUploadService } from '../../Services/FileUpload/file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  // Componente de  subida de ficheros

  constructor(
    private fileService: FileUploadService
    ) { }

  ngOnInit(): void {
  }


  @Input() textToShow = '';                                          // Texto a mostrar
  @Output() fileName = new EventEmitter();                           // Nombre del fichero cargado

  selectedFiles?: FileList;                                          // Archivos seleccionados
  currentFile?: File;                                                // Archivo actual
  progress = 0;                                                      // Progreso
  message = '';                                                      // Mensaje
  fileInfos?: Observable<any>;                                       // Información de los ficheros

  // Selecciona un fichero y lo sube

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    this.upload();
  }

  // Sube el fichero

  upload(): void {
    // Inicializamos el progreso

    this.progress = 0;
    
    // Comprobamos si hay ficheros
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file;
        
        // Subimos los ficheros
        
        this.fileService.upload(this.currentFile).subscribe({
          next: (event: any) => {

            // Vamos calculando el progreso
            
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.fileName.emit(event.body.id);
            }
          },
          error: (err: any) => {

            // En caso de error indicamos el mismo
            this.progress = 0;
            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Error al subir';
            }
            this.currentFile = undefined;
          }
        });
      }
      this.selectedFiles = undefined;
    }
  }

}
