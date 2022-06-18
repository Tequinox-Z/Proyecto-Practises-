import { PersonDto } from './../../../../../../core/Interfaces/personDto/person-dto';
import { Component, OnInit } from '@angular/core';
import { Rol } from '../../../../../../core/Interfaces/personDto/person-dto';
import { Teacher } from '../../../../../../core/Interfaces/teacher/teacher';
import { Student } from '../../../../../../core/Interfaces/student/student';
import { LaborTutor } from '../../../../../../core/Interfaces/LaborTutor/LaborTutor';
import { PersonServiceService } from '../../Services/PersonService/person-service.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../../../Auth/Services/Auth-service/auth.service';
import { UserService } from '../../../../Services/UserService/user.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../../../../../environments/environment';
import { DashboardService } from '../../../../Services/Dashboard-service/dashboard.service';
import { Router, ActivatedRoute } from '@angular/router';


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
    private http: HttpClient,
    private formBuilder: FormBuilder,
    public dashboardService: DashboardService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  rolSelected : Rol = Rol.ROLE_TEACHER;
  rolSelectedString :string = "";
  rolToCreate !: Rol;
  rolAdmin: Rol = Rol.ROLE_ADMIN;
  
  imageSelected = '';
  date : Date = new Date();

  public formGroup!: FormGroup;
  persons : Teacher[] | Student[] | LaborTutor[] = [];

  ngOnInit(): void {
    this.buildForm();
    this.getPersons();
  }

  setImage(event: string) {
    this.imageSelected = environment.serverFileAddress + "/files/" + event;
  }

  showFileInput() {
    let container = document.querySelector("#newPersonContainer") as HTMLElement;
    
    if (container.classList.contains("noShow")) {
      return false;
    }
    else { 
      return true;
    }
  }

  closeModal() {
    this.getPersons();
    this.formGroup.reset();
    this.imageSelected = "";
    let container = document.querySelector("#newPersonContainer") as HTMLElement;
    container.classList.add("noShow");
  }

  private buildForm(){
    this.formGroup = this.formBuilder.group({
      name: ['', [
        Validators.required
      ]],
      lastName: ['', [
        Validators.required
      ]],
      birthDate: ['', [
        Validators.required
      ]],
      dni: ['', [
        Validators.required, Validators.pattern('[0-9]{8}[A-Za-z]{1}')
      ], [this.personSvr] ],
      address: ['', [
        Validators.required
      ]],
      telefone: ['', [
        Validators.required, Validators.pattern('^[0-9]{9}$')
      ]],
      email: ['', [
        Validators.required, Validators.email
      ]],
      password: ['', [
        Validators.required, Validators.minLength(8)
      ]]
    });
  }

  get existPerson() {

    let errors = this.formGroup.get('dni')?.errors!;
      
    if (errors['exist']) {
      return "Dni registrado";
    }
    else {
      return "Indique un dni válido";
    }

  }

  getPersons() {
    if (this.rolSelected == Rol.ROLE_TEACHER) {
      
      this.rolSelectedString = "Profesores";
      this.dashboardService.setTitle("Profesores");

      this.personSvr.getTeachers().subscribe({
        next: (persons: any) => {
          this.persons = persons;
        }
      });
    }
    else if (this.rolSelected == Rol.ROLE_STUDENT) {
      this.rolSelectedString = "Estudiantes";
      this.dashboardService.setTitle("Estudiantes");

      this.personSvr.getStudents().subscribe({
        next: (persons: any) => {
          this.persons = persons;
        }
      });
    }
    else if (this.rolSelected == Rol.ROLE_LABOR_TUTOR) {
      this.rolSelectedString = "Tutores";
      this.dashboardService.setTitle("Tutores laborales");

      this.personSvr.getLaborTutor().subscribe({
        next: (persons: any) => {
          this.persons = persons;
        }
      });
    }
  }

  find (event: String) {
    if (this.rolSelected == Rol.ROLE_TEACHER) {
      
      this.rolSelectedString = "Profesores";

      this.personSvr.getTeachersFind(event).subscribe({
        next: (persons: any) => {
          this.persons = persons;
        }
      });
    }
    else if (this.rolSelected == Rol.ROLE_STUDENT) {
      this.rolSelectedString = "Estudiantes";

      this.personSvr.getStudentsFind(event).subscribe({
        next: (persons: any) => {
          this.persons = persons;
        }
      });
    }
    else if (this.rolSelected == Rol.ROLE_LABOR_TUTOR) {
      this.rolSelectedString = "Tutores";

      this.personSvr.getLaborTutorFind(event).subscribe({
        next: (persons: any) => {
          this.persons = persons;
        }
      });
    }
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
    let element = event.target as HTMLElement;

    if (!element.classList.contains("options")) {
      let persons = document.querySelectorAll(".person");

      persons.forEach((person) => {
        person.classList.remove("viewMenu")
      });
    }

  }

  toggleDisable (dni: string, enabled : boolean) {
    if (enabled) {
      this.personSvr.disable(dni).subscribe({
        next: () => {
          Swal.fire({
            icon: 'success',
            title: '¡Hecho!',
            text:  "El usuario con dni " + dni + " se ha deshabilitado"
          });
          this.getPersons();
        },
        error: (response) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text:  response.error.mensaje
          });
          this.getPersons();
        }
      })
    }
    else {
      this.personSvr.enable(dni).subscribe({
        next: () => {
          Swal.fire({
            icon: 'success',
            title: '¡Hecho!',
            text: "El usuario con dni " + dni + " se ha habilitado"
          });
          this.getPersons();
        },
        error: (response) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text:  response.error.mensaje
          });
          this.getPersons();
        }
      })
    }
  }


  remove(event: Event, dni: string) {

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
                  icon: 'success',
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
                  icon: 'success',
                  title: '¡Hecho!',
                  text:  "Borrado"
                })

                this.getPersons();
              },
              error: (response) => {
                Swal.fire({
                  
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
                  icon: 'success',
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

  addPerson (rol : Rol) {
    this.rolToCreate = rol;

    let container = document.querySelector("#newPersonContainer") as HTMLElement;
    container.classList.remove("noShow");
  }

  createUser () {

    if (!this.formGroup.valid) {
      Swal.fire({
        icon: 'error',
        title: 'Ooops...',
        text:  "Rellene el formulario correctamente"
      });
    }
    else if (this.imageSelected == "") {
      Swal.fire({
        icon: 'error',
        title: 'Ooops...',
        text:  "Seleccione una imagen de perfil"
      });
    }
    else {
      let newPerson : PersonDto = this.formGroup.value;

      newPerson.image = this.imageSelected;
      newPerson.rol = this.rolToCreate;

      this.personSvr.createPerson(newPerson).subscribe({
        next: () => {
          this.getPersons();

        },
        error: (response) => {
          this.getPersons();
          Swal.fire({
            icon: 'error',
            title: 'Ooops...',
            text:  response.error.mensaje
          });
        }
      })

      this.formGroup.reset();
      this.imageSelected = "";
      let container = document.querySelector("#newPersonContainer") as HTMLElement;
      container.classList.add("noShow");
    }
  }

  edit (event: Event, dni: string) {
    this.router.navigate([dni + "/edit"], {relativeTo: this.route});
  }

}

