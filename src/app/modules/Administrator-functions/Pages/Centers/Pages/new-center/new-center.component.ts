import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CentersService } from '../../Services/Centers-service/Centers.service';
import { School } from '../../../../../../core/Interfaces/school/school';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-center',
  templateUrl: './new-center.component.html',
  styleUrls: ['./new-center.component.css']
})
export class NewCenterComponent implements OnInit {

  public form!: FormGroup;
  newSchool!: School;

  constructor(private formBuilder: FormBuilder, private centersService: CentersService) { 
    
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
    });
    
  }

  send() {
    this.centersService.newCenter(this.form.value)
    .subscribe({
      next: (response: School) => {
        Swal.fire(
          'Centro creado',
          `Se ha creado el centro ${response.name}`,
          'success'
        )
      },
      error: (response) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: ((response.error.message == undefined)? 'Servidor no disponible' : response.error.message),
        })
      }
    })
  }

}
