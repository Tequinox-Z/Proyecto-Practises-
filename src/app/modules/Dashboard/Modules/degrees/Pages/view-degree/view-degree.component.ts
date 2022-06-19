import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DegreeService } from '../../Service/degree.service';
import { ProfessionalDegree } from '../../../../../../core/Interfaces/ProfessionalDegree/ProfessionalDegree';
import Swal from 'sweetalert2';
import { StudentService } from '../../../../../../shared/Services/studentService/student.service';
import { UserService } from '../../../../Services/UserService/user.service';

@Component({
  selector: 'app-view-degree',
  templateUrl: './view-degree.component.html',
  styleUrls: ['./view-degree.component.css']
})
export class ViewDegreeComponent implements OnInit {

  constructor(
    private rutaActiva: ActivatedRoute,
    private degreeSrv: DegreeService,
    private router: Router,
    private studentService: StudentService,
    public userSrv: UserService) { }

    public currentDegree!: ProfessionalDegree;           // Ciclo actual

    public selectBusiness :boolean = false;              // Selección de empresa
    public selectTeacher :boolean = false;               // Selección de profesor
    public selectStudent :boolean = false;               // Selección de estudiante

    public isAdmin: boolean = false;

  ngOnInit(): void {
    // Comprobamos si es admin

     if (this.userSrv.getPerson()?.rol?.toString() == "ROLE_ADMIN") {
        this.isAdmin = true;
     }
     
     // Cargamos
     this.loadDegree();
  }


  // Quita un profesor

  quitTeacher(dniTeacher: string) {

    // Preguntamos

    Swal.fire({
      title: '¿Quitar profesor?',
      text: "El profesor no podrá ver el ciclo",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "Cancelar",
      confirmButtonText: 'Quitar'
    }).then((result) => {
      if (result.isConfirmed) {

        // Quitamos

        let request = this.degreeSrv.quitTeacherFromDegree(this.currentDegree, dniTeacher).subscribe({
          next: () => {
            request.unsubscribe();
            // Cargamos
            this.loadDegree();
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
    })
  }



  // Carga un ciclo
  loadDegree() {

    // Obtenemos id
    let idDegree = this.rutaActiva.snapshot.params['idDegree'];

  // Leemos el ciclo
    let request = this.degreeSrv.getByDegreeOnly(idDegree).subscribe({
      next: (degree: any) => {
        request.unsubscribe();

        this.currentDegree = degree;

        // Cargamos las empresas

        let request2 = this.degreeSrv.getBusinessFromDegree(degree).subscribe({
          next: (business: any) => {
            
            request2.unsubscribe();

            this.currentDegree.businesses = business;
          },
          error: (response) => {
            request2.unsubscribe();

            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text:  response.error.mensaje
            })
          }
        });

        // Cargamos profesores

        let request3 = this.degreeSrv.getTeachersFromDegree(degree).subscribe({
          next: (teachers: any) => {
            request3.unsubscribe();
            this.currentDegree.teachers = teachers;
          },
          error: (response) => {
            request3.unsubscribe();

            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text:  response.error.mensaje
            })
          }
        });

        // Obtiene los estudiantes

        let request4 = this.degreeSrv.getStudentsFromDegree(degree).subscribe({
          next: (enrollments: any) => {
            request4.unsubscribe();

            this.currentDegree.enrollments = enrollments;
          },
          error: (response) => {

            request4.unsubscribe();

            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text:  response.error.mensaje
            })
          }
        });

      },
      error: () => {
        // En caso de error volvemos atrás

        this.router.navigate(["../../degrees"], { relativeTo: this.rutaActiva});
      }
    });
  }


  // Quita un estudiante

  quitStudent(idEnrollment: number) {

    // Preguntamos

    Swal.fire({
      title: '¿Desmatricular alumno?',
      text: "Se borrarán los datos de sus prácticas",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "Cancelar",
      confirmButtonText: 'Quitar'
    }).then((result) => {
      if (result.isConfirmed) {

        // Lo quitamos

        let request = this.degreeSrv.quitEnrollmentFromDegree(this.currentDegree, idEnrollment).subscribe({
          next: () => {
            request.unsubscribe();
            // Cargamos
            this.loadDegree();
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
    })
  }

  // Añade una empresa

  addBusiness(cif: string) {
    this.selectBusiness = false;

    // Añadimos

    let request = this.degreeSrv.addBusiness(this.currentDegree, cif).subscribe({
      next: () => {
        request.unsubscribe();
        // Cargamos
        this.loadDegree();
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

  // Añade un profesor
  addTeacher(dni: string) {
    this.selectTeacher = false;

    // Añadimos

    let request = this.degreeSrv.addTeacherToDegree(this.currentDegree, dni).subscribe({
      next: () => {
        request.unsubscribe();
        // Cargamos
        this.loadDegree();
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

  // Añade un estudiante
  addStudent(dni: string) {
    this.selectStudent = false;
    // Añadimos
    let request = this.degreeSrv.addStudentToDegree(this.currentDegree, dni).subscribe({
      next: () => {
        request.unsubscribe();
        this.loadDegree();
      },
      error: (response: any) => {
        request.unsubscribe();

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text:  response.error.mensaje
        })
      }
    })
  }

  // Cierra todos los modales
  closeAll() {
    this.selectBusiness = false;
    this.selectStudent = false;
    this.selectTeacher = false;
  }


  // Ver una practica
  viewPractise(idEnrollment: number) {
    this.router.navigateByUrl("/dashboard/practise/view/" + idEnrollment);
  }

  // Ver una empresa

  viewBusiness(cif: string) {
    this.router.navigateByUrl("/dashboard/business/search-business/edit/" + cif);
  }


  // Ver un persona

  viewPerson(dni: string) {
    this.router.navigateByUrl("/dashboard/person/management/" + dni + "/edit");
  }
}


