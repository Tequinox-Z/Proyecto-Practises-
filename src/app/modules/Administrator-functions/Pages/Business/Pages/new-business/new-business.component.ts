import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { BusinessService } from '../../Services/business-service/business.service';
import Swal from 'sweetalert2';
import { Business } from '../../../../../../core/Interfaces/business/Business';

@Component({
  selector: 'app-new-business',
  templateUrl: './new-business.component.html',
  styleUrls: ['./new-business.component.css']
})
export class NewBusinessComponent implements OnInit {

  public form!: FormGroup;
  newBusiness!: Business;

  constructor(private formBuilder: FormBuilder, private businessService: BusinessService) { }


  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      cif: ['', {
        validators: [
          Validators.required
        ]
      }],
      name: ['', {
        validators: [
          Validators.required
        ]
      }],
      numberOfStudents: ['', {
        validators: [
          Validators.required,
          Validators.minLength(8)
        ]
      }],
    });
    
  }

  send() {
    this.businessService.newBusiness(this.form.value)
    .subscribe({
      next: (response: Business) => {
        Swal.fire(
          'Empresa creado',
          `Se ha creado la empresa ${response.name}`,
          'success'
        )
      },
      error: (response) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: ((response.error.message == undefined)? 'Ya existe una empresa con este cif' : response.error.message),
        })
      }
    })
  }
}