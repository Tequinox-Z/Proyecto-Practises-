import { Component, OnInit } from '@angular/core';
import { PersonServiceService } from '../../Services/PersonService/person-service.service';
import { ActivatedRoute } from '@angular/router';
import { PersonDto } from '../../../../../../core/Interfaces/personDto/person-dto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {


  currentPerson : PersonDto = {};

  constructor(
    private personServiceService: PersonServiceService,
    private rutaActiva: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let dni = this.rutaActiva.snapshot.params['dni'];


    this.personServiceService.getPersonByDni(dni).subscribe({
      next: (person) => {
        this.currentPerson = person;
        console.log(person);
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

}
