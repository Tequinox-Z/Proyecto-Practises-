import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DegreeService } from '../../Service/degree.service';
import { ProfessionalDegree } from '../../../../../../core/Interfaces/ProfessionalDegree/ProfessionalDegree';
import Swal from 'sweetalert2';
import { StudentService } from '../../../../../../shared/Services/studentService/student.service';

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
    private studentService: StudentService) { }

    public currentDegree!: ProfessionalDegree;

    public selectBusiness :boolean = false;
    public selectTeacher :boolean = false;
    public selectStudent :boolean = false;

  ngOnInit(): void {
     this.loadDegree();
  }

  quitTeacher(dniTeacher: string) {

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
        this.degreeSrv.quitTeacherFromDegree(this.currentDegree, dniTeacher).subscribe({
          next: () => {
            this.loadDegree();
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
    })
  }



  loadDegree() {
    let idDegree = this.rutaActiva.snapshot.params['idDegree'];

    this.degreeSrv.getByDegreeOnly(idDegree).subscribe({
      next: (degree: any) => {
        this.currentDegree = degree;

        this.degreeSrv.getBusinessFromDegree(degree).subscribe({
          next: (business: any) => {
            this.currentDegree.businesses = business;
          },
          error: (response) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text:  response.error.mensaje
            })
          }
        });

        this.degreeSrv.getTeachersFromDegree(degree).subscribe({
          next: (teachers: any) => {
            this.currentDegree.teachers = teachers;
          },
          error: (response) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text:  response.error.mensaje
            })
          }
        });

        this.degreeSrv.getStudentsFromDegree(degree).subscribe({
          next: (enrollments: any) => {
            this.currentDegree.enrollments = enrollments;
          },
          error: (response) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text:  response.error.mensaje
            })
          }
        });

      },
      error: () => {
        this.router.navigate(["../../degrees"], { relativeTo: this.rutaActiva});
      }
    });
  }


  quitStudent(idEnrollment: number) {
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
        this.degreeSrv.quitEnrollmentFromDegree(this.currentDegree, idEnrollment).subscribe({
          next: () => {
            this.loadDegree();
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
    })
  }

  addBusiness(cif: string) {
    this.selectBusiness = false;

    this.degreeSrv.addBusiness(this.currentDegree, cif).subscribe({
      next: () => {
        this.loadDegree();
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

  addTeacher(dni: string) {
    this.selectTeacher = false;
    this.degreeSrv.addTeacherToDegree(this.currentDegree, dni).subscribe({
      next: () => {
        this.loadDegree();
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

  addStudent(dni: string) {
    this.selectStudent = false;
    this.degreeSrv.addStudentToDegree(this.currentDegree, dni).subscribe({
      next: () => {
        this.loadDegree();
      },
      error: (response: any) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text:  response.error.mensaje
        })
      }
    })
  }

  closeAll() {
    this.selectBusiness = false;
    this.selectStudent = false;
    this.selectTeacher = false;
  }


  viewPractise(idEnrollment: number) {
    this.router.navigateByUrl("/dashboard/practise/view/" + idEnrollment);
  }


}


