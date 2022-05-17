import { Component, OnInit } from '@angular/core';
import { PersonDto } from '../../../../../../core/Interfaces/personDto/person-dto';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonService } from '../../Services/PersonService/person.service';
import { Validate } from '../../Services/PersonService/validate';

@Component({
  selector: 'app-new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.css']
})
export class NewPersonComponent implements OnInit {

  public form!: FormGroup;
  newPerson!: PersonDto;

  constructor(private formBuilder: FormBuilder, private validate: Validate, private personService: PersonService) { 

  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({

      name: ['', {
        validators: [
          Validators.required
        ]
      }],
      birthDate: ['', {
        validators: [
          Validators.required
        ]
      }],

      dni: ['', {
        validators: [
          Validators.required,
          Validators.pattern('^[0-9]{8}[a-zA-Z]{1}$')
          // ,[this.validate]
        ],
      }],

      lastName: ['', {
        validators: [
          Validators.required
        ]
      }],

      telefone: ['', {
        validators: [
          Validators.required,
          Validators.pattern('^[0-9]{9}$')
        ]
      }],

      email: ['', {
        validators: [
          Validators.required,
          Validators.email
        ]
      }],

      address: ['', {
        validators: [
          Validators.required
        ]
      }],
      password: ['', {
        validators: [
          Validators.required,
          Validators.minLength(8)
        ]
      }],
      rol: ['', {
        validators: [
          Validators.required
        ]
      }],
    });
    
  }
  
/*
  onFileChange(event: Event) {

    let files: any = (event.target as HTMLInputElement).files;
  
    if (files.length > 0) {
      const file = files[0];
      this.form.patchValue({
        fileSource: file
      });
    }
  }
*/

  /**
   * Crea una nueva persona
   */
  send() {

    // Lanzamos la petición para crear uan persona

    this.personService.createNewPerson(this.form.value)
    .subscribe({
      next: (response) => {
          
        // Indicamos que está creada la persona
        
          Swal.fire(
          'Usuario creado',
          `Puede administrar el usuario en gestionar personas`,
          'success'
        )
      },
      error: (response) => {

        // En caso de error mostramos el error

          Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: ((response.error.mensaje == undefined)? 'Servidor no disponible' : response.error.mensaje),
        })
      }
    })
  }

  fieldNoValid(field: string ) {
    return this.form.get(field)?.invalid
            && this.form.get(field)?.touched;
  }

}