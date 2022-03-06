import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CentersService } from '../../Services/Centers-service/Centers.service';
import { School } from '../../../../../../core/Interfaces/school/school';
import Swal from 'sweetalert2';
import * as CryptoJS from 'crypto-js';
import { Administrator } from '../../../../../../core/Interfaces/administrator/administrator';


@Component({
  selector: 'app-find-centers',
  templateUrl: './find-centers.component.html',
  styleUrls: ['./find-centers.component.css']
})
export class FindCentersComponent implements OnInit {

  schools!: School[];
  findEnable!: boolean;
  adminInfo!: Administrator[];

  @Input() setSchoolMode: boolean = false;
  @Output() emitSchool: EventEmitter<School> = new EventEmitter<School>();

  menu!: HTMLElement;

  idSchoolForMenu = "";

  constructor(private centersService: CentersService) { 

  }

  ngOnInit(): void {
    this.getAllCenters();

    document.querySelector('#schoolsElements')?.addEventListener("contextmenu", (event: Event) => {
       event.preventDefault(); 

       if (event.target === document.querySelector('#schoolsElements'))  {
          this.hiddenMenu();
       }
       else {
          this.showMenu();
       }
    });

    document.querySelector('#schoolsElements')?.addEventListener("contextmenu", (event: PointerEventInit) => {
      
      this.menu.style.top = event.clientY + "px";
      this.menu.style.left = event.clientX + "px";
      
    });

    this.menu = document.querySelector('#context-menu')!;
  }

  updateMenuData(event: Event) {
    this.idSchoolForMenu = (event.currentTarget as HTMLDivElement).getAttribute('id') + '';
  }

  hiddenMenu() {
    this.menu.classList.add('minimized');
    setTimeout(() => {
      this.menu.style.display = "none";
    }, 100)
  }

  showMenu() {
    this.menu.style.display = "inline-block";
    setTimeout(() => {
      this.menu.classList.remove('minimized');
    }, 100);
  }

  find (event: Event) {

    let text = (event.target as HTMLInputElement).value.trim();

    if (text.length == 0) {
      this.getAllCenters();
    }
    else {
      this.getAllCentersByName(text);
    }
  }

  setSchool (event:(Event | string)) {

    let schoolId: string;

    if (typeof event == "string") {
      schoolId = event;
    }
    else {
      schoolId = (event.target as HTMLDivElement).parentElement?.parentElement?.getAttribute("id") + '';
    }
    
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
                this.message(error.error.mensaje);
              }
            });
          }
        })
      },
      error: (error) => {
        this.message(error.error.mensaje);
      }
    });

  }


  getAllCentersByName(text: string) {
    this.centersService.getAllByName(text)
    .subscribe({
      next: (response: School[]) => {
        this.schools = response;
      },
      error: (error) => {
        this.schools = [];
        this.message(error.error.mensaje);
      }
    })
  }


  getAllCenters() {

    this.centersService.getAll()
    .subscribe({
      next: (response: School[]) => {

        if (this.findEnable == null) {
            if (response) {
              this.findEnable = true;
            }
            else {
              this.findEnable = false;
            }
        }

        this.schools = response;
      },
      error: (error) => {
        this.message(error.error.mensaje);
      }
    })
  }

  message(error: string) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: ((error == undefined)? 'Servidor no disponible' : error),
    })
  }


  getInfo(event: (Event | string)) {

    this.changeVisiblityOfInfo();

    let schoolId: string;

    if (typeof event == "string") {
      schoolId = event;
    }
    else {
      schoolId = (event.target as HTMLDivElement).parentElement?.parentElement?.getAttribute("id") + '';
    }

    this.centersService.getAdministratorsFromCenter(schoolId)
    .subscribe({
      next: (response: Administrator[]) => {
        this.adminInfo = response;
      },
      error: (error) => {
        this.adminInfo = [];
      }
    });
    
  }


  changeVisiblityOfInfo() {
    document.querySelector("#information")!.classList.toggle("noShow");
  }
}
