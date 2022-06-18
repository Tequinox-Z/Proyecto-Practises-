import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PracticeService } from '../../Service/practice.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Enrollment } from 'src/app/core/Interfaces/Enrollment/Enrollment';
import { UserService } from '../../../../Services/UserService/user.service';

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

  currentEnrollment !: Enrollment;

  selectBusiness: boolean = false;
  selectTutor: boolean = false;
  selectTeacher: boolean = false;

  isAdmin: boolean = false;

  setBusiness (cif :string) {
    if (!this.currentEnrollment.practise?.business) {
      this.practiseSrv.setBusiness(cif, this.currentEnrollment.practise!.id!).subscribe({
        next: (data) => {
          this.practiseSrv.quitLaborTutor(this.currentEnrollment!.practise!).subscribe({
            next: () => {
              this.loadEnrollment();
            },
            error: (error) => {
              this.loadEnrollment();
            }
          })
        },
        error: (response) => {
          Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text:  response.error.mensaje
        })
        }
      });
    }
    else {
      this.practiseSrv.editBusiness(cif, this.currentEnrollment.practise!.id!).subscribe({
        next: (data) => {
          this.practiseSrv.quitLaborTutor(this.currentEnrollment!.practise!).subscribe({
            next: () => {
              this.loadEnrollment();
            },
            error: () => {
              this.loadEnrollment();
            }
          })
          
        },
        error: (response) => {
          Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text:  response.error.mensaje
        })
        }
      });
    }
  }

  setTeacher (dni :string) {
    this.practiseSrv.editTeacher(this.currentEnrollment!.practise!, dni).subscribe({
      next: () => {
        this.loadEnrollment();
      },
      error: (response) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text:  response.error.mensaje
        })
      }
    })
  }
  setTutor (dni :string) {
    this.practiseSrv.editTutor(this.currentEnrollment!.practise!, dni).subscribe({
      next: () => {
        this.loadEnrollment();
      },
      error: (response) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text:  response.error.mensaje
        })
      }
    })
  }

  selectNewTutor() {
    if (!this.currentEnrollment.practise?.business) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text:  'Indique primero la empresa'
      })
    }
    else {
      this.selectTutor = true;
    }
  }

  closeAll() {
    this.selectBusiness = false;
    this.selectTutor = false;
    this.selectTeacher = false;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.setRestantDays();
    },100)
  }

  ngOnInit(): void {
    if (this.userSrv.getPerson()?.rol?.toString() == "ROLE_ADMIN") {
      this.isAdmin = true;
     }
    this.loadEnrollment();
  }

  loadEnrollment() {
    let idDegree: number = this.rutaActiva.snapshot.params['idEnrollment'];

    this.practiseSrv.getEnrollment(idDegree).subscribe({
      next: (data) => {
        this.currentEnrollment = data;
        this.getBusiness(this.currentEnrollment.practise!.id!);
        this.getTeacher(this.currentEnrollment.practise!.id!);
        this.getTutor(this.currentEnrollment.practise!.id!);
        this.setRestantDays();
      },
      error: (response) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text:  response.error.mensaje
        })
      }
    });
  }

  getBusiness(id: number) {
    this.practiseSrv.getBusiness(id).subscribe({
      next: (business) => {
        this.currentEnrollment.practise!.business = business;
      },
      error: (response) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text:  response.error.mensaje
        })
      }
    });
  }

  getTeacher(id: number) {
    this.practiseSrv.getTeacher(id).subscribe({
      next: (teacher) => {
        this.currentEnrollment.practise!.teacher = teacher;
      }
    });
  }

  getTutor(id: number) {
    this.practiseSrv.getTutor(id).subscribe({
      next: (tutor) => {
        this.currentEnrollment.practise!.laborTutor = tutor;
      }
    });
  }

  back() {
    history.go(-1);
  }


  startPractise() {
    let idDegree: number = this.rutaActiva.snapshot.params['idEnrollment'];

    this.practiseSrv.startPractise(idDegree).subscribe({
      next: (data) => {
        this.loadEnrollment();
      },
      error: (response) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text:  response.error.mensaje
        })
      }
    });
  }


  setDateStart() {
    Swal.fire({
      title: 'Indique fecha de inicio',
      html: `<input type="date" id="start" class="swal2-input" placeholder="Fecha inicio">`,
      confirmButtonText: 'Establecer',
      focusConfirm: false,
      preConfirm: () => {
        let input = Swal.getPopup()!.querySelector('#start') as HTMLInputElement;

        if (input.value.trim().length != 0) {
          this.configureStart(input.value);
        }
      }
    })
  }

  setDateEnd() {
    Swal.fire({
      title: 'Indique fecha de fin',
      html: `<input type="date" id="end" class="swal2-input" placeholder="Fecha fin">`,
      confirmButtonText: 'Establecer',
      focusConfirm: false,
      preConfirm: () => {
        let input = Swal.getPopup()!.querySelector('#end') as HTMLInputElement;

        if (input.value.trim().length != 0) {
          this.configureEnd(input.value);
        }
      }
    })
  }

  configureEnd(value :string) {
    let idDegree: number = this.rutaActiva.snapshot.params['idEnrollment'];

    this.practiseSrv.getEnrollment(idDegree).subscribe({
      next: (data) => {

        let enrollment: Enrollment = data;

        enrollment.practise!.finish = new Date(value);

        this.practiseSrv.updatePractise(enrollment.practise!).subscribe({
          next: (data) => {
            this.loadEnrollment();
            this.setRestantDays();
          },
          error: (response) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text:  response.error.mensaje
            })
          }
        })
      },
      error: (response) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text:  response.error.mensaje
        })
      }
    })
  }

  configureStart(value :string) {
    let idDegree: number = this.rutaActiva.snapshot.params['idEnrollment'];

    this.practiseSrv.getEnrollment(idDegree).subscribe({
      next: (data) => {

        let enrollment: Enrollment = data;

        enrollment.practise!.start = new Date(value);

        this.practiseSrv.updatePractise(enrollment.practise!).subscribe({
          next: (data) => {
            this.loadEnrollment();
            this.setRestantDays();
          },
          error: (response) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text:  response.error.mensaje
            })
          }
        })
      },
      error: (response) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text:  response.error.mensaje
        })
      }
    })
  }



  setRestantDays() {
    let element = document.querySelector("#restant") as HTMLElement;

    if (element) {
      element.innerText = this.calculateDiff();
    }
  }

  calculateDiff() {

    let result = "0";

    if (this.currentEnrollment.practise?.start && this.currentEnrollment.practise.finish) {
      let diff = new Date(this.currentEnrollment.practise!.finish!).getTime() - new Date().getTime();
      
      if (diff < 0) {
        return result;
      }
      else {
        return (parseInt((diff/(1000*60*60*24)).toString())).toString();
      }
    }
    else {
      return result;
    }
  }
}