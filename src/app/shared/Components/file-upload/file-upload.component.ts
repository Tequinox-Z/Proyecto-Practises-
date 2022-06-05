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

  constructor(
    private fileService: FileUploadService
    ) { }

  ngOnInit(): void {
  }

  @Input() textToShow = '';
  @Output() fileName = new EventEmitter();

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    this.upload();
  }

  upload(): void {
    this.progress = 0;
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file;
        this.fileService.upload(this.currentFile).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              console.log(event);
              this.fileName.emit(event.body.id);
            }
          },
          error: (err: any) => {
            console.log(err);
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
