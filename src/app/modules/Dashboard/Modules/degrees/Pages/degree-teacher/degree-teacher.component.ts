import { Component, OnInit } from '@angular/core';
import { CenterService } from '../../../center/Service/center.service';
import { DegreeService } from '../../Service/degree.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessionalDegree } from '../../../../../../core/Interfaces/ProfessionalDegree/ProfessionalDegree';
import Swal from 'sweetalert2';
import { Teacher } from '../../../../../../core/Interfaces/teacher/teacher';
import { UserService } from '../../../../Services/UserService/user.service';

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

   selectTeacher: boolean = false;
   isAdmin : boolean = false;

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
  
    },
    error: () => {
      this.router.navigate(["../"], { relativeTo: this.rutaActiva});
      }
  });
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
}