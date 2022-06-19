import { Component, OnInit } from '@angular/core';
import { PersonServiceService } from '../../Services/PersonService/person-service.service';
import { ActivatedRoute } from '@angular/router';
import { PersonDto, Rol } from '../../../../../../core/Interfaces/personDto/person-dto';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../../../../../environments/environment';

// Edición de persona

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {


  currentPerson : PersonDto = {};                      // Persona actual
  public formGroup!: FormGroup;                        // Formulario
  date : Date = new Date();                            // Fecha actual
  

  constructor(
    private personServiceService: PersonServiceService,
    private rutaActiva: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) { }


  ngOnInit(): void {

    // Obtenemos el dni

    let dni = this.rutaActiva.snapshot.params['dni'];

    // Cargamos la persona

    let request = this.personServiceService.getPersonByDni(dni).subscribe({
      next: (person) => {

        request.unsubscribe();

        this.currentPerson = person;

        // COnstruimos el formulario
        this.buildForm();
      },
      error: (response) => {
        request.unsubscribe();

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text:  response.error.mensaje
        });

        // Volvemos atrás
        this.back();
      }
    })
  }


  // Recarga la persona

  reloadPerson() {

    // Cargamos

    let request = this.personServiceService.getPersonByDni(this.rutaActiva.snapshot.params['dni']).subscribe({
      next: (person) => {
        request.unsubscribe();

        this.currentPerson = person;
      },
      error: (response) => {

        request.unsubscribe();
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text:  response.error.mensaje
        });

        // Volvemos atrás
        this.back();
      }
    })
  }


  // Establece una nueva imagen

  setNewImage(event: String) {

    let request = this.personServiceService.getPersonByDni(this.currentPerson.dni!).subscribe({
      next: (person) => {
        request.unsubscribe();
      
      // Modificamos sus datos
      let personWithNewImage : PersonDto = person;

      personWithNewImage.password = undefined;

      personWithNewImage.image = environment.serverFileAddress + "/files/" + event;

    // Comprobamos su rol
    if (this.currentPerson.rol?.toString() == "ROLE_TEACHER") {
      
      let request = this.personServiceService.editTeacher(personWithNewImage).subscribe({
        next: () => {
          request.unsubscribe();

          // Recargamos
          this.reloadPerson();
          Swal.fire({
            icon: 'success',
            title: '¡Hecho!'
          });
        },
        error: (response) => {

          request.unsubscribe();

          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text:  response.error.mensaje
          });
        }
      })
    }
    else if (this.currentPerson.rol?.toString() == "ROLE_STUDENT") {

      // Si es estudiante lo indicamos

      let request = this.personServiceService.editStudent(personWithNewImage).subscribe({
        next: () => {
          request.unsubscribe();

          // Cargamos

          this.reloadPerson();
          Swal.fire({
            icon: 'success',
            title: '¡Hecho!'
          });
        },
        error: (response) => {

          request.unsubscribe();

          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text:  response.error.mensaje
          });
        }
      })
    }
    else if (this.currentPerson.rol?.toString() == "ROLE_LABOR_TUTOR") {

      // En caso de un tutor

      let request = this.personServiceService.editTutor(personWithNewImage).subscribe({
        next: () => {
          request.unsubscribe();

          // Cargamos

          this.reloadPerson();
          Swal.fire({
            icon: 'success',
            title: '¡Hecho!'
          });
        },
        error: (response) => {

          request.unsubscribe();

          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text:  response.error.mensaje
          });
        }
      })
    }
    else if (this.currentPerson.rol?.toString() == "ROLE_ADMIN") { 

      // En caso de administrador

      let request = this.personServiceService.editAdmin(personWithNewImage).subscribe({
        next: () => {
          request.unsubscribe();

          this.reloadPerson();
          Swal.fire({
            icon: 'success',
            title: '¡Hecho!'
          });
        },
        error: (response) => {
          request.unsubscribe();
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text:  response.error.mensaje
          });
        }
      })
    }
      },
      error: (response) => {
        request.unsubscribe();

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text:  response.error.mensaje
        });

        // Vovemos atrás

        this.back();
      }
    })
  }

  // Construye el formulario
  private buildForm(){
    let dateString = this.currentPerson.birthDate?.toString().split("T")[0];

    this.formGroup = this.formBuilder.group({
      name: [this.currentPerson.name, [
        Validators.required
      ]],
      lastName: [this.currentPerson.lastName, [
        Validators.required
      ]],
      birthDate: [dateString, [
        Validators.required
      ]],
      address: [this.currentPerson.address, [
        Validators.required
      ]],
      telefone: [this.currentPerson.telefone, [
        Validators.required, Validators.pattern('^[0-9]{9}$')
      ]],
      email: [this.currentPerson.email, [
        Validators.required, Validators.email
      ]]
    });
  }


  // Vuelve atrás
  back() {
    history.back();
  }

  // Guarda la persona
  save() {
    if (!this.formGroup.valid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text:  "Rellene todos los campos correctamente"
      });
    }
    else {
      this.editPerson();
    }
  }

  // Cambia su contraseña
  changePassword() {

    // Preguntamos

    Swal.fire({
      title: 'Indique nueva contraseña',
      input: 'password',
      inputAttributes: {
        autocapitalize: 'off'
      },
      preConfirm: (password: string) => {
        if (password.length < 8) {
          // SI no es válida indicamos error
          Swal.showValidationMessage("La contraseña debe ser igual o superior a 8 carácteres");
        }
      },

      showCancelButton: true,
      
      confirmButtonText: 'Cambiar',
      cancelButtonText: "Cancelar",
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {

      // Obtenemos la persona e insertamos los datos
      let personWithNewPassword = this.currentPerson;

      personWithNewPassword.password = result.value!;

      if (this.currentPerson.rol?.toString() == "ROLE_TEACHER") {
        // Si es admin
      
        let request = this.personServiceService.editTeacher(personWithNewPassword).subscribe({
          next: () => {
            request.unsubscribe();
            
            // Recargamos
            this.reloadPerson();
            Swal.fire({
              icon: 'success',
              title: '¡Hecho!'
            });
          },
          error: (response) => {
            request.unsubscribe();

            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text:  response.error.mensaje
            });
          }
        })
      }
      else if (this.currentPerson.rol?.toString() == "ROLE_STUDENT") {

        // En caso de estudiante

        let request = this.personServiceService.editStudent(personWithNewPassword).subscribe({
          next: () => {
            request.unsubscribe();

            // Recargamos

            this.reloadPerson();
            Swal.fire({
              icon: 'success',
              title: '¡Hecho!'
            });
          },
          error: (response) => {

            request.unsubscribe();

            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text:  response.error.mensaje
            });
          }
        })
      }
      else if (this.currentPerson.rol?.toString() == "ROLE_LABOR_TUTOR") {

        // Si es un tutor

        let request = this.personServiceService.editTutor(personWithNewPassword).subscribe({
          next: () => {
            request.unsubscribe();
            // Recargamos

            this.reloadPerson();
            Swal.fire({
              icon: 'success',
              title: '¡Hecho!'
            });
          },
          error: (response) => {

            request.unsubscribe();

            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text:  response.error.mensaje
            });
          }
        })
      }
      else if (this.currentPerson.rol?.toString() == "ROLE_ADMIN") { 

        // Si es administrador

        let request = this.personServiceService.editAdmin(personWithNewPassword).subscribe({
          next: () => {
            request.unsubscribe();

            // Recargamos
            this.reloadPerson();
            Swal.fire({
              icon: 'success',
              title: '¡Hecho!'
            });
          },
          error: (response) => {
            request.unsubscribe();

            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text:  response.error.mensaje
            });
          }
        })
      }
    })
    
  }

  // Edita una persona
  editPerson () {
    // Establecemos sus datos
    let newPersonData : PersonDto = this.formGroup.value;

    newPersonData.dni = this.currentPerson.dni;
    newPersonData.password = undefined;


    if (this.currentPerson.rol?.toString() == "ROLE_TEACHER") {

      // SI es profesor
      let request = this.personServiceService.editTeacher(newPersonData).subscribe({
        next: () => {
          request.unsubscribe();

          // Recargamos
          this.reloadPerson();
          Swal.fire({
            icon: 'success',
            title: '¡Hecho!'
          });
        },
        error: (response) => {
          request.unsubscribe();

          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text:  response.error.mensaje
          });
        }
      })
    }
    else if (this.currentPerson.rol?.toString() == "ROLE_STUDENT") {
      // SI es estudiante

      let request = this.personServiceService.editStudent(newPersonData).subscribe({
        next: () => {
          request.unsubscribe();
          
          // Recargamos
          this.reloadPerson();
          Swal.fire({
            icon: 'success',
            title: '¡Hecho!'
          });
        },
        error: (response) => {

          request.unsubscribe();
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text:  response.error.mensaje
          });
        }
      })
    }
    else if (this.currentPerson.rol?.toString() == "ROLE_LABOR_TUTOR") {

      // SI es tutor laboral

      let request = this.personServiceService.editTutor(newPersonData).subscribe({
        next: () => {
          request.unsubscribe();
          // Recargamos
          this.reloadPerson();
          Swal.fire({
            icon: 'success',
            title: '¡Hecho!'
          });
        },
        error: (response) => {
          request.unsubscribe();

          // Recargamos
          this.reloadPerson();
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text:  response.error.mensaje
          });
        }
      })
    }
    else if (this.currentPerson.rol?.toString() == "ROLE_ADMIN") { 

      // SI es administrador

      let request = this.personServiceService.editAdmin(newPersonData).subscribe({
        next: () => {
          request.unsubscribe();
          // Recargamos

          this.reloadPerson();
          Swal.fire({
            icon: 'success',
            title: '¡Hecho!'
          });
        },
        error: (response) => {

          request.unsubscribe();

          // Recargamos
          this.reloadPerson();
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text:  response.error.mensaje
          });
        }
      })
    }
  }

}