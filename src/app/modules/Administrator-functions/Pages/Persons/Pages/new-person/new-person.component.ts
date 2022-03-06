import { Component, OnInit } from '@angular/core';
import { PersonDto } from '../../../../../../core/Interfaces/personDto/person-dto';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonService } from '../../Services/PersonService/person.service';

@Component({
  selector: 'app-new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.css']
})
export class NewPersonComponent implements OnInit {

  public form!: FormGroup;
  newPerson!: PersonDto;

  constructor(private formBuilder: FormBuilder, private personService: PersonService) { 

  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      
      /*photo: ['', {
        validators: [
          Validators.required
        ]
      }],*/


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
        ]
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

  send() {

    this.personService.createNewPerson(this.form.value)
    .subscribe({
      next: (response) => {
          Swal.fire(
          'Usuario creado',
          `Puede administrar el usuario en gestionar personas`,
          'success'
        )
      },
      error: (response) => {
          Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: ((response.error.mensaje == undefined)? 'Servidor no disponible' : response.error.mensaje),
        })
      }
    })
  }


}
