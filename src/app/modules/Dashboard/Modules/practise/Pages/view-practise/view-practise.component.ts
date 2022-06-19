import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PracticeService } from '../../Service/practice.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Enrollment } from 'src/app/core/Interfaces/Enrollment/Enrollment';
import { UserService } from '../../../../Services/UserService/user.service';

// Vista de practica

@Component({
  selector: 'app-view-practise',
  templateUrl: './view-practise.component.html',
  styleUrls: ['./view-practise.component.css']
})
export class ViewPractiseComponent implements OnInit, AfterViewInit {

  constructor(
    private practiseSrv: PracticeService,
    private rutaActiva: ActivatedRoute,
    private userSrv: UserService
  ) { }

  currentEnrollment !: Enrollment;                  // Practica actual

  selectBusiness: boolean = false;                  // Selección de empresa
  selectTutor: boolean = false;                     // Selección de tutor
  selectTeacher: boolean = false;                   // Selección de profesor

  isAdmin: boolean = false;                          // Indica si es admin o no

  // Establece una empresa

  setBusiness (cif :string) {

    // Comprobamos si está establecida

    if (!this.currentEnrollment.practise?.business) {
      // Establecemos la empresa
      let request = this.practiseSrv.setBusiness(cif, this.currentEnrollment.practise!.id!).subscribe({
        next: (data) => {
          request.unsubscribe();

          // QUitamos el tutor laboral

          let request2 = this.practiseSrv.quitLaborTutor(this.currentEnrollment!.practise!).subscribe({
            next: () => {
              request2.unsubscribe();
              
              // Recargamos
              this.loadEnrollment();
            },
            error: (error) => {
              request2.unsubscribe();

              // Recargamos
              this.loadEnrollment();
            }
          })
        },
        error: (response) => {
          request.unsubscribe();

          Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text:  response.error.mensaje
        })
        }
      });
    }
    else {

      // Si estaba establecida editamos

      let request = this.practiseSrv.editBusiness(cif, this.currentEnrollment.practise!.id!).subscribe({
        next: (data) => {
          request.unsubscribe();
          // Quitamos el tutor

          let request2 = this.practiseSrv.quitLaborTutor(this.currentEnrollment!.practise!).subscribe({
            next: () => {
              request2.unsubscribe();

              // Recargamos
              this.loadEnrollment();
            },
            error: () => {
              request2.unsubscribe();
              
              // Recargamos
              this.loadEnrollment();
            }
          })
          
        },
        error: (response) => {

          request.unsubscribe();


          Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text:  response.error.mensaje
        })
        }
      });
    }
  }

  // Establece un profesor
  setTeacher (dni :string) {
    // Editamos
    let request = this.practiseSrv.editTeacher(this.currentEnrollment!.practise!, dni).subscribe({
      next: () => {
        request.unsubscribe();
        // Recargamos
        this.loadEnrollment();
      },
      error: (response) => {
        request.unsubscribe();

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text:  response.error.mensaje
        })
      }
    })
  }

  // Establece el tutor
  setTutor (dni :string) {

    // Editamos

    let request = this.practiseSrv.editTutor(this.currentEnrollment!.practise!, dni).subscribe({
      next: () => {
        request.unsubscribe();

        this.loadEnrollment();
      },
      error: (response) => {

        request.unsubscribe();

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text:  response.error.mensaje
        })
      }
    })
  }

  // Selecciona un tutor

  selectNewTutor() {
    // Comprobamos si tiene empresa seleccionada

    if (!this.currentEnrollment.practise?.business) {

      // Si es no, indicamos error

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text:  'Indique primero la empresa'
      })
    }
    else {
      // Si no damos a elegir

      this.selectTutor = true;
    }
  }

  // Cierra todos los modales
  closeAll() {
    this.selectBusiness = false;
    this.selectTutor = false;
    this.selectTeacher = false;
  }

  // Calcula los días restantes cada 100 milisegundos

  ngAfterViewInit() {
    setTimeout(() => {
      this.setRestantDays();
    },100)
  }

  ngOnInit(): void {

    // COmprobamos si es admin

    if (this.userSrv.getPerson()?.rol?.toString() == "ROLE_ADMIN") {
      this.isAdmin = true;
     }

    // Cargamos las matriculas
    this.loadEnrollment();
  }

  // Carga una matricula
  loadEnrollment() {
    // Obtenemos su id
    let idDegree: number = this.rutaActiva.snapshot.params['idEnrollment'];

    // La obtenemos

    let request = this.practiseSrv.getEnrollment(idDegree).subscribe({
      next: (data) => {
        request.unsubscribe();

        this.currentEnrollment = data;
        this.getBusiness(this.currentEnrollment.practise!.id!);
        this.getTeacher(this.currentEnrollment.practise!.id!);
        this.getTutor(this.currentEnrollment.practise!.id!);
        this.setRestantDays();
      },
      error: (response) => {

        request.unsubscribe();

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text:  response.error.mensaje
        })
      }
    });
  }

  // Obtiene una empresa

  getBusiness(id: number) {

    // La obtenemos

    let request = this.practiseSrv.getBusiness(id).subscribe({
      next: (business) => {
        request.unsubscribe();

        this.currentEnrollment.practise!.business = business;
      },
      error: (response) => {
        request.unsubscribe();

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text:  response.error.mensaje
        })
      }
    });
  }

  // Obtiene un profesor

  getTeacher(id: number) {

    // Lo obtenemos

    let request = this.practiseSrv.getTeacher(id).subscribe({
      next: (teacher) => {
        request.unsubscribe();

        this.currentEnrollment.practise!.teacher = teacher;
      }
    });
  }

  // Obtiene el tutor

  getTutor(id: number) {

    // Lo obtenemos

    let request = this.practiseSrv.getTutor(id).subscribe({
      next: (tutor) => {
        request.unsubscribe();

        this.currentEnrollment.practise!.laborTutor = tutor;
      }
    });
  }

  // Vuelve atrás

  back() {
    history.go(-1);
  }

  // Comienza las prácticas del alumno
  startPractise() {

    // Obtenemos su id
  
    let idDegree: number = this.rutaActiva.snapshot.params['idEnrollment'];

    // Empezamos

    let request = this.practiseSrv.startPractise(idDegree).subscribe({
      next: (data) => {
        request.unsubscribe();
        
        // Recargamos

        this.loadEnrollment();
      },
      error: (response) => {

        request.unsubscribe();

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text:  response.error.mensaje
        })
      }
    });
  }

  // Establece la fecha de inicio

  setDateStart() {
    // Preguntamos

    Swal.fire({
      title: 'Indique fecha de inicio',
      html: `<input type="date" id="start" class="swal2-input" placeholder="Fecha inicio">`,
      confirmButtonText: 'Establecer',
      focusConfirm: false,
      preConfirm: () => {
        let input = Swal.getPopup()!.querySelector('#start') as HTMLInputElement;

        // Configuramos

        if (input.value.trim().length != 0) {
          this.configureStart(input.value);
        }
      }
    })
  }

  // Establece la fecha de fin

  setDateEnd() {

    // Preguntamos

    Swal.fire({
      title: 'Indique fecha de fin',
      html: `<input type="date" id="end" class="swal2-input" placeholder="Fecha fin">`,
      confirmButtonText: 'Establecer',
      focusConfirm: false,
      preConfirm: () => {
        let input = Swal.getPopup()!.querySelector('#end') as HTMLInputElement;

        // Establecemos

        if (input.value.trim().length != 0) {
          this.configureEnd(input.value);
        }
      }
    })
  }

  // Configura la fecha de fin

  configureEnd(value :string) {

    // Obtenemos el id del ciclo
    let idDegree: number = this.rutaActiva.snapshot.params['idEnrollment'];

    // Obtenemos el ciclo

    let request = this.practiseSrv.getEnrollment(idDegree).subscribe({
      next: (data) => {
        request.unsubscribe();

        
        let enrollment: Enrollment = data;

        // Establecemos la fecha y actualizamos

        enrollment.practise!.finish = new Date(value);

        let request2 = this.practiseSrv.updatePractise(enrollment.practise!).subscribe({
          next: (data) => {
            request2.unsubscribe();

            // Recargamos y calculamos los días
            this.loadEnrollment();
            this.setRestantDays();
          },
          error: (response) => {

            request2.unsubscribe();

            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text:  response.error.mensaje
            })
          }
        })
      },
      error: (response) => {

        request.unsubscribe();

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text:  response.error.mensaje
        })
      }
    })
  }

  // Configura una fecha de inicio

  configureStart(value :string) {

    // Obtenemos el id del ciclo

    let idDegree: number = this.rutaActiva.snapshot.params['idEnrollment'];


    // Obtenemo la matricula

    let request = this.practiseSrv.getEnrollment(idDegree).subscribe({
      next: (data) => {
        request.unsubscribe();

        // Obtenemos la matricula y la editamos

        let enrollment: Enrollment = data;

        enrollment.practise!.start = new Date(value);

        let request2 = this.practiseSrv.updatePractise(enrollment.practise!).subscribe({
          next: (data) => {

            request2.unsubscribe();

            this.loadEnrollment();
            this.setRestantDays();
          },
          error: (response) => {

            request2.unsubscribe();

            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text:  response.error.mensaje
            })
          }
        })
      },
      error: (response) => {

        request.unsubscribe();

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text:  response.error.mensaje
        })
      }
    })
  }


  // Calcula los días restantes
  setRestantDays() {
    let element = document.querySelector("#restant") as HTMLElement;

    if (element) {
      element.innerText = this.calculateDiff();
    }
  }

  // Calcula la diferencia de días

  calculateDiff() {

    let result = "0";

    if (this.currentEnrollment.practise?.start && this.currentEnrollment.practise.finish) {
      let diff = new Date(this.currentEnrollment.practise!.finish!).getTime() - new Date().getTime();
      
      if (diff < 0) {
        return result;            // Si es menor a 0 indicaos 0 días
      }
      else {
        // Calculamos la diferencia

        return (parseInt((diff/(1000*60*60*24)).toString())).toString();
      }
    }
    else {

      // Retornamos el resultado
      return result;
    }
  }
}