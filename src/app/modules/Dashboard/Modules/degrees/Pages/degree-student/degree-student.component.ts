import { Component, OnInit } from '@angular/core';
import { CenterService } from '../../../center/Service/center.service';
import { DegreeService } from '../../Service/degree.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessionalDegree } from '../../../../../../core/Interfaces/ProfessionalDegree/ProfessionalDegree';
import Swal from 'sweetalert2';
import { UserService } from '../../../../Services/UserService/user.service';


// Página de estudiantes de un ciclo


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

   selectStudent: boolean = false;    // Modal de selección de estudiante
   isAdmin: boolean = false;          // Indica si es administrador

   ngOnInit(): void {

    // COmprobamos si es admin

    if (this.userSrv.getPerson()?.rol?.toString() == "ROLE_ADMIN") {
      this.isAdmin = true;
     }

     // Cargamos el ciclo

     this.loadDegree();
   }
    
    currentDegree!: ProfessionalDegree;            // Ciclo actual
    editMode: boolean = false;                     // Modo de edición
  

    // Carga el mapa
loadDegree() {
  // Obtnemos el id del ciclo

  let idDegree = this.rutaActiva.snapshot.params['idDegree'];
  
  // Obtenemos el ciclo

  let request = this.degreeSrv.getByDegreeOnly(idDegree).subscribe({
    next: (degree: any) => {

      request.unsubscribe();

      this.currentDegree = degree;
  
      // Obtenemos los estudiantes

      let request2 = this.degreeSrv.getStudentsFromDegree(degree).subscribe({
        next: (enrollments: any) => {

          request2.unsubscribe();
          this.currentDegree.enrollments = enrollments;
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
  
    },
    error: () => {
      request.unsubscribe();
      // EN caso de errror, volvemos atras
      this.router.navigate(["../"], { relativeTo: this.rutaActiva});
      }
  });
  }


  // Añade un estudiante

    addStudent(dni: string) {
      this.selectStudent = false;

      // Añadimos el estudiante
      let request = this.degreeSrv.addStudentToDegree(this.currentDegree, dni).subscribe({
        next: () => {
          request.unsubscribe();

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


    // Quita un estudiante

    quitStudent(dniStudent: number) {

      // Avisamos

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

          // Quitamos

          let request = this.degreeSrv.quitEnrollmentFromDegree(this.currentDegree, dniStudent).subscribe({
            next: () => {
              request.unsubscribe();

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
      });
    }    


  // Ver un persona

  viewPerson(dni: string) {
    this.router.navigateByUrl("/dashboard/person/management/" + dni + "/edit");
  }
}
