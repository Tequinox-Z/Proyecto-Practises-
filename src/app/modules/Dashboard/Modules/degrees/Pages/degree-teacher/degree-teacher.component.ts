import { Component, OnInit } from '@angular/core';
import { CenterService } from '../../../center/Service/center.service';
import { DegreeService } from '../../Service/degree.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessionalDegree } from '../../../../../../core/Interfaces/ProfessionalDegree/ProfessionalDegree';
import Swal from 'sweetalert2';
import { Teacher } from '../../../../../../core/Interfaces/teacher/teacher';
import { UserService } from '../../../../Services/UserService/user.service';


// Profesores de un ciclo

@Component({
  selector: 'app-degree-teacher',
  templateUrl: './degree-teacher.component.html',
  styleUrls: ['./degree-teacher.component.css']
})
export class DegreeTeacherComponent implements OnInit {

  constructor (private centerSvr: CenterService, 
    private degreeSrv: DegreeService, 
    private rutaActiva: ActivatedRoute,
    private router: Router,
    private userSrv: UserService
   ) { }

   selectTeacher: boolean = false;          // Selección de profesor
   isAdmin : boolean = false;               // Es admin

   ngOnInit(): void {

    // Comrpobamos si es admin

    if (this.userSrv.getPerson()?.rol?.toString() == "ROLE_ADMIN") {
      this.isAdmin = true;
    }

    // Cargamos el ciclo

     this.loadDegree();
   }
    
    currentDegree!: ProfessionalDegree;      // Ciclo actual
    editMode: boolean = false;               // Modo edición
  

// Carga el ciclo
loadDegree() {

  // Obtenemos el id

  let idDegree = this.rutaActiva.snapshot.params['idDegree'];
  
  // Lo cargamos

  let request = this.degreeSrv.getByDegreeOnly(idDegree).subscribe({
    next: (degree: any) => {
      request.unsubscribe();

      this.currentDegree = degree;
  
      // Cargamos los profesores

      let request2 = this.degreeSrv.getTeachersFromDegree(degree).subscribe({
        next: (teachers: any) => {
          request2.unsubscribe();

          this.currentDegree.teachers = teachers;
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
  
    },
    error: () => {
      request.unsubscribe();

      // Volvemos atrás
      this.router.navigate(["../"], { relativeTo: this.rutaActiva});
      }
  });
  }

  // Añade un profesor
    addTeacher(dni: string) {
      this.selectTeacher = false;

      // Lo añadimos

      let request = this.degreeSrv.addTeacherToDegree(this.currentDegree, dni).subscribe({
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

          // QUitamos el profesor
          let request = this.degreeSrv.quitTeacherFromDegree(this.currentDegree, dniTeacher).subscribe({
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
      })
    }
}