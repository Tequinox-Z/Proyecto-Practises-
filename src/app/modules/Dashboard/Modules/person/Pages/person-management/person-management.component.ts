import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Rol } from '../../../../../../core/Interfaces/personDto/person-dto';
import { Administrator } from '../../../../../../core/Interfaces/administrator/administrator';
import { Teacher } from '../../../../../../core/Interfaces/teacher/teacher';
import { Student } from '../../../../../../core/Interfaces/student/student';
import { LaborTutor } from '../../../../../../core/Interfaces/LaborTutor/LaborTutor';
import { PersonServiceService } from '../../Services/PersonService/person-service.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../../../Auth/Services/Auth-service/auth.service';
import { UserService } from '../../../../Services/UserService/user.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-person-management',
  templateUrl: './person-management.component.html',
  styleUrls: ['./person-management.component.css']
})
export class PersonManagementComponent implements OnInit {

  constructor (
    private personSvr: PersonServiceService,
    private userService: UserService,
    private authService: AuthService,
    private http: HttpClient
  ) { }

  rolSelected : Rol = Rol.ROLE_TEACHER;
  rolSelectedString :string = "";

  persons : Teacher[] | Student[] | LaborTutor[] = [];

  ngOnInit(): void {
    this.getPersons();
  }


  getPersons() {
    if (this.rolSelected == Rol.ROLE_TEACHER) {
      
      this.rolSelectedString = "Profesores";

      this.personSvr.getTeachers().subscribe({
        next: (persons: any) => {
          this.persons = persons;
        }
      });
    }
    else if (this.rolSelected == Rol.ROLE_STUDENT) {
      this.rolSelectedString = "Estudiantes";

      this.personSvr.getStudents().subscribe({
        next: (persons: any) => {
          this.persons = persons;
        }
      });
    }
    else if (this.rolSelected == Rol.ROLE_LABOR_TUTOR) {
      this.rolSelectedString = "Tutores";

      this.personSvr.getLaborTutor().subscribe({
        next: (persons: any) => {
          this.persons = persons;
        }
      });
    }
  }

  find (event: String) {

  }

  setPerson(event: any) {
    let option = event.target.value;

    if (option == "teacher") {
      this.rolSelected = Rol.ROLE_TEACHER;
    }
    else if (option == "student") {
      this.rolSelected = Rol.ROLE_STUDENT;
    }
    else if (option == "labor-tutor") {
      this.rolSelected = Rol.ROLE_LABOR_TUTOR;
    }

    this.getPersons();
  }

  showMenu(event : Event) {
    let currentElement = event.target as HTMLElement;

    currentElement.parentElement?.classList.add("viewMenu");
  }

  noShowMenu(event: Event) {
    let currentElement = event.target as HTMLElement;
    currentElement.parentElement?.parentElement?.classList.remove("viewMenu");
  }

  view(event: Event, dni: string) {
    this.noShowMenu(event);
  }

  edit(event: Event, dni: string) {
    this.noShowMenu(event);
  }

  remove(event: Event, dni: string) {
    this.noShowMenu(event);

    Swal.fire({
      title: 'Borrar usuario',
      text: "Se borrarán todos los datos relacionados irreversiblemente",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "Cancelar",
      confirmButtonText: 'Borrar'
    }).then((result) => {
      if (result.isConfirmed) {
        switch (this.rolSelected) {
          case Rol.ROLE_TEACHER: {
            this.personSvr.removeTeacher(dni).subscribe({
              next: () => {
                Swal.fire({
                  icon: 'error',
                  title: '¡Hecho!',
                  text:  "Borrado"
                });

                this.getPersons();
              },
              error: (response) => {
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text:  response.error.mensaje
                })
              }
            })
            break;
          }
          case Rol.ROLE_LABOR_TUTOR: {
            this.personSvr.removeLaborTutor(dni).subscribe({
              next: () => {
                Swal.fire({
                  icon: 'error',
                  title: '¡Hecho!',
                  text:  "Borrado"
                })

                this.getPersons();
              },
              error: (response) => {
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text:  response.error.mensaje
                })
              }
            })
            break;
          } 
          case Rol.ROLE_STUDENT: {
            this.personSvr.removeStudent(dni).subscribe({
              next: () => {
                Swal.fire({
                  icon: 'error',
                  title: '¡Hecho!',
                  text:  "Borrado"
                })

                this.getPersons();
              },
              error: (response) => {
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text:  response.error.mensaje
                })
              }
            })
            break;
          }
        }

       

      }
    })
  }

}

