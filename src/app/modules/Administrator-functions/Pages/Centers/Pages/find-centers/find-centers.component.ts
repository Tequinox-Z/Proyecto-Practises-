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

  schools!: School[];                                                                        // Lista de escuelas
  findEnable!: boolean;                                                                      // Habilita o deshabilita la búsqueda
  adminInfo!: Administrator[];                                                               // Mantiene la lista de administradores de una escuela


  @Input() setSchoolMode: boolean = false;                                                   // Indica si hay que habilitar el modo establecer escuela o no
  @Output() emitSchool: EventEmitter<School> = new EventEmitter<School>();                   // Emite un evento indicando que el usuario ha establecido una escuela


  menu!: HTMLElement;                                                                        // Menú de usuario

  idSchoolForMenu = "";                                                                      // Identificador de la escuela para menú

  constructor(private centersService: CentersService) { 

  }

  ngOnInit(): void {

    this.getAllCenters();                                                                                    // Obtenemos todos los centros

        
    // Evento Menú click derecho

    document.querySelector('#schoolsElements')?.addEventListener("contextmenu", (event: Event) => {
       event.preventDefault();                                                                               // Quitamos el evento por defecto

       if (event.target === document.querySelector('#schoolsElements'))  {
          this.hiddenMenu();                                                                                 // Ocultamos el menú si ha pulsado otra cosa
       }
       else {
          this.showMenu();                                                                                   // Mostramos la escuela si ha pulsado una escuela
       }
    });


    // Muestra el menú donde se ha hecho click derecho

    document.querySelector('#schoolsElements')?.addEventListener("contextmenu", (event: PointerEventInit) => {
      
      this.menu.style.top = event.clientY + "px";
      this.menu.style.left = event.clientX + "px";
      
    });

    this.menu = document.querySelector('#context-menu')!;
  }

  /**
   * Actualzia los datos del menú
   * @param event Evento
   */
  updateMenuData(event: Event) {
    this.idSchoolForMenu = (event.currentTarget as HTMLDivElement).getAttribute('id') + '';
  }

  /**
   * Oculta el menú
   */
  hiddenMenu() {
    this.menu.classList.add('minimized');                                          // Aplicamos la animación
    setTimeout(() => {
      this.menu.style.display = "none";                                            // Al poco tiempo lo quitamos
    }, 100)
  }

  /**
   * Muestra el menú
   */
  showMenu() {
    this.menu.style.display = "inline-block";                                      // Lo mostramos
    setTimeout(() => {
      this.menu.classList.remove('minimized');                                     // Quitamos la minimización para que haga la animación
    }, 100);
  }

  /**
   * Busca centros
   * @param event Evento
   */
  find (event: Event) {

    let text = (event.target as HTMLInputElement).value.trim();                    // Texto de búsqueda

    if (text.length == 0) {
      this.getAllCenters();                                                        // Si no hay nada obtenemos todos los centros
    }
    else {
      this.getAllCentersByName(text);                                              // Si hay algo obtiene los centros por nombre
    }
  }

  /**
   * Establece una determinada escuela
   * @param event Evento o String
   */
  setSchool (event:(Event | string)) {

    let schoolId: string;                      // Obtenemos el id del colegio

    if (typeof event == "string") {
      schoolId = event;                        // Si es de tipo string asignamos el evento directamente ya que ya tenemos el di
    }
    else {
      schoolId = (event.target as HTMLDivElement).parentElement?.parentElement?.getAttribute("id") + '';          // Si no sacamos el número
    }
    
    // Obtenemos el centro

    this.centersService.getCenter(schoolId)
    .subscribe({
      next: (school: School) => {

        // Pedimos la contraseña

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

            let passwordEncrypt = CryptoJS.MD5(login).toString();        // Ciframos la contraseá 

            if (passwordEncrypt != school.password) {
              Swal.showValidationMessage("Contraseña incorrecta");       // Verificamos la contraseña
            }
          },
          allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
          if (result.isConfirmed) {

            // Si la contraseña es correcta establecemos el centro

            this.centersService.setCenter(schoolId)
            .subscribe({
              next: (response: School) => {
                this.emitSchool.emit(response);                               // Emitimos el centro
              },
              error: (error) => {
                this.message(error.error.mensaje);                            // En caso de error lanzamos el error
              }
            });
          }
        })
      },
      error: (error) => {
        this.message(error.error.mensaje);                            // En caso de error lanzamos error
      }
    });

  }

  /**
   * Obtiene todos los centros por nombre
   */
  getAllCentersByName(text: string) {

    // Lanzamos la petición

    this.centersService.getAllByName(text)
    .subscribe({
      next: (response: School[]) => {
        this.schools = response;                  // Establecemos los centros
      },
      error: (error) => {
        this.schools = [];                        // En caso de no haber o error vaciamos los colegios
        this.message(error.error.mensaje);        // Mostramos el error
      }
    })
  }

  /**
   * Obtiene todos los centros
   */
  getAllCenters() {

    // Lanzamos la petición
    
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
