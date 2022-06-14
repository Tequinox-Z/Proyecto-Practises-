import { Component, OnInit } from '@angular/core';
import { CenterService } from '../../../center/Service/center.service';
import { DegreeService } from '../../Service/degree.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessionalDegree } from '../../../../../../core/Interfaces/ProfessionalDegree/ProfessionalDegree';
import Swal from 'sweetalert2';
import { UserService } from '../../../../Services/UserService/user.service';

@Component({
  selector: 'app-degree-student',
  templateUrl: './degree-student.component.html',
  styleUrls: ['./degree-student.component.css']
})
export class DegreeStudentComponent implements OnInit {

  constructor (
    private centerSvr: CenterService, 
    private degreeSrv: DegreeService, 
    private rutaActiva: ActivatedRoute,
    private router: Router,
    private userSrv: UserService
   ) { }

   selectStudent: boolean = false;
   isAdmin: boolean = false;

   ngOnInit(): void {
    if (this.userSrv.getPerson()?.rol?.toString() == "ROLE_ADMIN") {
      this.isAdmin = true;
     }
     this.loadDegree();
   }
    
    currentDegree!: ProfessionalDegree;
    editMode: boolean = false;
  

loadDegree() {
  let idDegree = this.rutaActiva.snapshot.params['idDegree'];
  
  this.degreeSrv.getByDegreeOnly(idDegree).subscribe({
    next: (degree: any) => {
      this.currentDegree = degree;
  
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
      this.router.navigate(["../"], { relativeTo: this.rutaActiva});
      }
  });
  }


    addStudent(dni: string) {
      this.selectStudent = false;
      this.degreeSrv.addStudentToDegree(this.currentDegree, dni).subscribe({
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



    quitStudent(dniStudent: number) {

      Swal.fire({
        title: '¿Quitar estudiante?',
        text: "El estudiante será desmatriculado del ciclo y se borrarán sus prácticas",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: "Cancelar",
        confirmButtonText: 'Quitar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.degreeSrv.quitEnrollmentFromDegree(this.currentDegree, dniStudent).subscribe({
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
      });
    }    
}
