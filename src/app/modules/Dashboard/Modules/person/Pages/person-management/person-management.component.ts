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


// Vista de administración de personas


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

  rolSelected : Rol = Rol.ROLE_TEACHER;                          // Rol seleccionado
  rolSelectedString :string = "";                                // Rol en string
  rolToCreate !: Rol;                                            // ROl a crear
  rolAdmin: Rol = Rol.ROLE_ADMIN;                                // Indica si es admin
  
  imageSelected = '';                                           // Imagen seleccionada
  date : Date = new Date();                                     // Fecha actual

  public formGroup!: FormGroup;                                 // Formularios
  persons : Teacher[] | Student[] | LaborTutor[] = [];          // Personas

  ngOnInit(): void {

    // Construimos el formulario y cargamos el mapa

    this.buildForm();
    this.getPersons();
  }

  // Establece la imagen

  setImage(event: string) {
    this.imageSelected = environment.serverFileAddress + "/files/" + event;
  }

  // Muestra el input de ficheros
  showFileInput() {
    let container = document.querySelector("#newPersonContainer") as HTMLElement;
    
    if (container.classList.contains("noShow")) {
      return false;
    }
    else { 
      return true;
    }
  }

  // Cierra el modal

  closeModal() {
    this.getPersons();
    this.formGroup.reset();
    this.imageSelected = "";
    let container = document.querySelector("#newPersonContainer") as HTMLElement;
    container.classList.add("noShow");
  }

  // Construye el formulario
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

  // Comprueba si existe la persona
  get existPerson() {

    let errors = this.formGroup.get('dni')?.errors!;
      
    if (errors['exist']) {
      return "Dni registrado";
    }
    else {
      return "Indique un dni válido";
    }

  }

  // Obtiene personas

  getPersons() {
    if (this.rolSelected == Rol.ROLE_TEACHER) {

      // SI son tutores
      // Establecemos los títulos

      this.rolSelectedString = "Profesores";
      this.dashboardService.setTitle("Profesores");

      // Cargamos

      let request = this.personSvr.getTeachers().subscribe({
        next: (persons: any) => {
          request.unsubscribe();

          this.persons = persons;
        }
      });
    }
    else if (this.rolSelected == Rol.ROLE_STUDENT) {

      // SI es estudiante, indicamos los títulos
      this.rolSelectedString = "Estudiantes";
      this.dashboardService.setTitle("Estudiantes");

      // Cargamos

      let request = this.personSvr.getStudents().subscribe({
        next: (persons: any) => {
          request.unsubscribe();

          this.persons = persons;
        }
      });
    }
    else if (this.rolSelected == Rol.ROLE_LABOR_TUTOR) {

      // Si es un tutor
      // Indicamos los títulos

      this.rolSelectedString = "Tutores";
      this.dashboardService.setTitle("Tutores laborales");

      // Cargamos

      let request = this.personSvr.getLaborTutor().subscribe({
        next: (persons: any) => {
          request.unsubscribe();
          this.persons = persons;
        }
      });
    }
  }

  // Busca personas por nombre y rol
  find (event: String) {
    if (this.rolSelected == Rol.ROLE_TEACHER) {
      // Si es profesor
      this.rolSelectedString = "Profesores";

      let request = this.personSvr.getTeachersFind(event).subscribe({
        next: (persons: any) => {
          request.unsubscribe();
          
          // Recargamos
          this.persons = persons;
        }
      });
    }
    else if (this.rolSelected == Rol.ROLE_STUDENT) {
      // Si es estudiante

      this.rolSelectedString = "Estudiantes";

      let request = this.personSvr.getStudentsFind(event).subscribe({
        next: (persons: any) => {
          request.unsubscribe();
          // Recargamos
          this.persons = persons;
        }
      });
    }
    else if (this.rolSelected == Rol.ROLE_LABOR_TUTOR) {

      // Si es tutor

      this.rolSelectedString = "Tutores";

      let request = this.personSvr.getLaborTutorFind(event).subscribe({
        next: (persons: any) => {
          request.unsubscribe();

          // Recargamos
          this.persons = persons;
        }
      });
    }
  }

  // Establece el rol a ver
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

  // Muestra el menu
  showMenu(event : Event) {
    let currentElement = event.target as HTMLElement;

    currentElement.parentElement?.classList.add("viewMenu");
  }

  // Oculta el menu
  noShowMenu(event: Event) {
    let element = event.target as HTMLElement;

    if (!element.classList.contains("options")) {
      let persons = document.querySelectorAll(".person");

      persons.forEach((person) => {
        person.classList.remove("viewMenu")
      });
    }

  }

  // Deshbailitao habilit un usuario
  toggleDisable (dni: string, enabled : boolean) {
    if (enabled) {

      // SI está habilitado lo cambiamos

      let request = this.personSvr.disable(dni).subscribe({
        next: () => {
          request.unsubscribe();
          
          // Indicamos y recargamos
          
          Swal.fire({
            icon: 'success',
            title: '¡Hecho!',
            text:  "El usuario con dni " + dni + " se ha deshabilitado"
          });
          this.getPersons();
        },
        error: (response) => {
          request.unsubscribe();

          // Recargamos

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
      // Si está deshabilitado

      let request = this.personSvr.enable(dni).subscribe({
        next: () => {
          request.unsubscribe();
          
          // Recargamos
          Swal.fire({
            icon: 'success',
            title: '¡Hecho!',
            text: "El usuario con dni " + dni + " se ha habilitado"
          });
          this.getPersons();
        },
        error: (response) => {
          request.unsubscribe();
          
          // Recargamos
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


  // Borra una persona
  remove(event: Event, dni: string) {

    // Preguntamos

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

            // Si es profesor

            let request = this.personSvr.removeTeacher(dni).subscribe({
              next: () => {
                request.unsubscribe();

                Swal.fire({
                  icon: 'success',
                  title: '¡Hecho!',
                  text:  "Borrado"
                });

                this.getPersons();
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
            break;
          }
          case Rol.ROLE_LABOR_TUTOR: {
            // En caso de tutor

            let request = this.personSvr.removeLaborTutor(dni).subscribe({
              next: () => {
                request.unsubscribe();

                Swal.fire({
                  icon: 'success',
                  title: '¡Hecho!',
                  text:  "Borrado"
                })
                
                // Recargamos
                this.getPersons();
              },
              error: (response) => {

                request.unsubscribe();

                // Recargamos

                Swal.fire({
                  
                  title: 'Oops...',
                  text:  response.error.mensaje
                })
              }
            })
            break;
          } 
          case Rol.ROLE_STUDENT: {

            // EN caso de estudiante
            let request = this.personSvr.removeStudent(dni).subscribe({
              next: () => {
                request.unsubscribe();

                Swal.fire({
                  icon: 'success',
                  title: '¡Hecho!',
                  text:  "Borrado"
                })

                this.getPersons();
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
            break;
          }
        }
      }
    })
  }

  // Añade una persona con dicho rol

  addPerson (rol : Rol) {
    this.rolToCreate = rol;

    let container = document.querySelector("#newPersonContainer") as HTMLElement;
    container.classList.remove("noShow");
  }

  // Crea un usuario
  createUser () {

    // COmprobamos si es válido

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

      // Si es válido creamos la persona

      let newPerson : PersonDto = this.formGroup.value;

      newPerson.image = this.imageSelected;
      newPerson.rol = this.rolToCreate;

      // Guardamos...

      let request = this.personSvr.createPerson(newPerson).subscribe({
        next: () => {

          // Actualizamos
          request.unsubscribe();
          this.getPersons();

        },
        error: (response) => {
          request.unsubscribe();

          // Actualizamos
          this.getPersons();
          Swal.fire({
            icon: 'error',
            title: 'Ooops...',
            text:  response.error.mensaje
          });
        }
      })

      // Reseteamos los datos

      this.formGroup.reset();
      this.imageSelected = "";
      let container = document.querySelector("#newPersonContainer") as HTMLElement;
      container.classList.add("noShow");
    }
  }

  // Ir a persona
  edit (event: Event, dni: string) {
    this.router.navigate([dni + "/edit"], {relativeTo: this.route});
  }

}

