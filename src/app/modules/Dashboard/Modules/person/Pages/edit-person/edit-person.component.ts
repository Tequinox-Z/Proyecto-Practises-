import { Component, OnInit } from '@angular/core';
import { PersonServiceService } from '../../Services/PersonService/person-service.service';
import { ActivatedRoute } from '@angular/router';
import { PersonDto, Rol } from '../../../../../../core/Interfaces/personDto/person-dto';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../../../../../environments/environment';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {


  currentPerson : PersonDto = {};
  public formGroup!: FormGroup;
  date : Date = new Date();
  

  constructor(
    private personServiceService: PersonServiceService,
    private rutaActiva: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) { }


  ngOnInit(): void {

    let dni = this.rutaActiva.snapshot.params['dni'];

    this.personServiceService.getPersonByDni(dni).subscribe({
      next: (person) => {
        this.currentPerson = person;
        this.buildForm();
      },
      error: (response) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text:  response.error.mensaje
        });
        this.back();
      }
    })
  }


  reloadPerson() {
    this.personServiceService.getPersonByDni(this.rutaActiva.snapshot.params['dni']).subscribe({
      next: (person) => {
        this.currentPerson = person;
      },
      error: (response) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text:  response.error.mensaje
        });
        this.back();
      }
    })
  }


  setNewImage(event: String) {

    this.personServiceService.getPersonByDni(this.currentPerson.dni!).subscribe({
      next: (person) => {
        person
      
      let personWithNewImage : PersonDto = person;

      personWithNewImage.password = undefined;

      personWithNewImage.image = environment.serverFileAddress + "/files/" + event;

    if (this.currentPerson.rol?.toString() == "ROLE_TEACHER") {
      
      this.personServiceService.editTeacher(personWithNewImage).subscribe({
        next: () => {
          this.reloadPerson();
          Swal.fire({
            icon: 'success',
            title: '¡Hecho!'
          });
        },
        error: (response) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text:  response.error.mensaje
          });
        }
      })
    }
    else if (this.currentPerson.rol?.toString() == "ROLE_STUDENT") {
      this.personServiceService.editStudent(personWithNewImage).subscribe({
        next: () => {
          this.reloadPerson();
          Swal.fire({
            icon: 'success',
            title: '¡Hecho!'
          });
        },
        error: (response) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text:  response.error.mensaje
          });
        }
      })
    }
    else if (this.currentPerson.rol?.toString() == "ROLE_LABOR_TUTOR") {
      this.personServiceService.editTutor(personWithNewImage).subscribe({
        next: () => {
          this.reloadPerson();
          Swal.fire({
            icon: 'success',
            title: '¡Hecho!'
          });
        },
        error: (response) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text:  response.error.mensaje
          });
        }
      })
    }
    else if (this.currentPerson.rol?.toString() == "ROLE_ADMIN") { 
      this.personServiceService.editAdmin(personWithNewImage).subscribe({
        next: () => {
          this.reloadPerson();
          Swal.fire({
            icon: 'success',
            title: '¡Hecho!'
          });
        },
        error: (response) => {
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
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text:  response.error.mensaje
        });
        this.back();
      }
    })
  }

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


  back() {
    history.back();
  }

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

  changePassword() {
    Swal.fire({
      title: 'Indique nueva contraseña',
      input: 'password',
      inputAttributes: {
        autocapitalize: 'off'
      },
      preConfirm: (password: string) => {
        if (password.length < 8) {
          Swal.showValidationMessage("La contraseña debe ser igual o superior a 8 carácteres");
        }
      },

      showCancelButton: true,
      
      confirmButtonText: 'Cambiar',
      cancelButtonText: "Cancelar",
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {

      let personWithNewPassword = this.currentPerson;

      personWithNewPassword.password = result.value!;

      if (this.currentPerson.rol?.toString() == "ROLE_TEACHER") {
      
        this.personServiceService.editTeacher(personWithNewPassword).subscribe({
          next: () => {
            this.reloadPerson();
            Swal.fire({
              icon: 'success',
              title: '¡Hecho!'
            });
          },
          error: (response) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text:  response.error.mensaje
            });
          }
        })
      }
      else if (this.currentPerson.rol?.toString() == "ROLE_STUDENT") {
        this.personServiceService.editStudent(personWithNewPassword).subscribe({
          next: () => {
            this.reloadPerson();
            Swal.fire({
              icon: 'success',
              title: '¡Hecho!'
            });
          },
          error: (response) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text:  response.error.mensaje
            });
          }
        })
      }
      else if (this.currentPerson.rol?.toString() == "ROLE_LABOR_TUTOR") {
        this.personServiceService.editTutor(personWithNewPassword).subscribe({
          next: () => {
            this.reloadPerson();
            Swal.fire({
              icon: 'success',
              title: '¡Hecho!'
            });
          },
          error: (response) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text:  response.error.mensaje
            });
          }
        })
      }
      else if (this.currentPerson.rol?.toString() == "ROLE_ADMIN") { 
        this.personServiceService.editAdmin(personWithNewPassword).subscribe({
          next: () => {
            this.reloadPerson();
            Swal.fire({
              icon: 'success',
              title: '¡Hecho!'
            });
          },
          error: (response) => {
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

  editPerson () {
    let newPersonData : PersonDto = this.formGroup.value;

    newPersonData.dni = this.currentPerson.dni;
    newPersonData.password = undefined;

    if (this.currentPerson.rol?.toString() == "ROLE_TEACHER") {
      this.personServiceService.editTeacher(newPersonData).subscribe({
        next: () => {
          this.reloadPerson();
          Swal.fire({
            icon: 'success',
            title: '¡Hecho!'
          });
        },
        error: (response) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text:  response.error.mensaje
          });
        }
      })
    }
    else if (this.currentPerson.rol?.toString() == "ROLE_STUDENT") {
      this.personServiceService.editStudent(newPersonData).subscribe({
        next: () => {
          this.reloadPerson();
          Swal.fire({
            icon: 'success',
            title: '¡Hecho!'
          });
        },
        error: (response) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text:  response.error.mensaje
          });
        }
      })
    }
    else if (this.currentPerson.rol?.toString() == "ROLE_LABOR_TUTOR") {
      this.personServiceService.editTutor(newPersonData).subscribe({
        next: () => {
          this.reloadPerson();
          Swal.fire({
            icon: 'success',
            title: '¡Hecho!'
          });
        },
        error: (response) => {
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
      this.personServiceService.editAdmin(newPersonData).subscribe({
        next: () => {
          this.reloadPerson();
          Swal.fire({
            icon: 'success',
            title: '¡Hecho!'
          });
        },
        error: (response) => {
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