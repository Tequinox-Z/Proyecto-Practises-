import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CentersService } from '../../Services/Centers-service/Centers.service';
import { School } from '../../../../../../core/Interfaces/school/school';
import Swal from 'sweetalert2';
import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-find-centers',
  templateUrl: './find-centers.component.html',
  styleUrls: ['./find-centers.component.css']
})
export class FindCentersComponent implements OnInit {


  schools!: School[];
  @Input() setSchoolMode: boolean = true;


  @Output() emitSchool: EventEmitter<School> = new EventEmitter<School>();

  constructor(private centersService: CentersService) { 

  }

  ngOnInit(): void {

    this.centersService.getAll()
    .subscribe({
      next: (response: School[]) => {
        this.schools = response;
      },
      error: (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: ((error.error.mensaje == undefined)? 'Servidor no disponible' : error.error.mensaje),
        })
      }
    })
  }

  setSchool(event:Event) {
    let schoolId = (event.target as HTMLDivElement).parentElement?.parentElement?.getAttribute("id") + '';
    
    this.centersService.getCenter(schoolId)
    .subscribe({
      next: (school: School) => {

        Swal.fire({
          title: 'Introduzca la contraseña',
          input: 'password',
          inputAttributes: {
            autocapitalize: 'off'
          },
          showCancelButton: true,
          confirmButtonText: 'Administrar',
          cancelButtonText: 'Cancelar',
          cancelButtonColor: 'transparent',
          showLoaderOnConfirm: true,
          preConfirm: (login) => {
            let passwordEncrypt = CryptoJS.MD5(login).toString();

            if (passwordEncrypt != school.password) {
              Swal.showValidationMessage("Contraseña incorrecta");
            }
          },
          allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
          if (result.isConfirmed) {
            this.centersService.setCenter(schoolId)
            .subscribe({
              next: (response: School) => {
                this.emitSchool.emit(response);
              },
              error: (error) => {
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: ((error.error.mensaje == undefined)? 'Servidor no disponible' : error.error.mensaje),
                })
              }
            });
          }
        })
      },
      error: (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: ((error.error.mensaje == undefined)? 'Servidor no disponible' : error.error.mensaje),
        })
        console.log(error)
      }
    });

  }
}
