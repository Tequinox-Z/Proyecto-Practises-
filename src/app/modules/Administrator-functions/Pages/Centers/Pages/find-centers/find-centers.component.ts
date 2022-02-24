import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CentersService } from '../../Services/Centers-service/Centers.service';
import { School } from '../../../../../../core/Interfaces/school/school';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-find-centers',
  templateUrl: './find-centers.component.html',
  styleUrls: ['./find-centers.component.css']
})
export class FindCentersComponent implements OnInit {


  schools!: School[];
  @Input() setSchoolMode: boolean = false;


  @Output() emitSchool: EventEmitter<School> = new EventEmitter<School>();

  constructor(private centersService: CentersService) { 

  }

  ngOnInit(): void {

    this.centersService.getAll()
    .subscribe({
      next: (response: School[]) => {
        this.schools = response;
      },
      error: (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: ((error.error.mensaje == undefined)? 'Servidor no disponible' : error.error.mensaje),
        })
      }
    })
  }

  setSchool(event:Event) {
    let schoolId = (event.target as HTMLDivElement).parentElement?.getAttribute("id") + '';
    
    this.centersService.setCenter(schoolId)
    .subscribe({
      next: (response: School) => {
        this.emitSchool.emit(response);
      },
      error: (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: ((error.error.mensaje == undefined)? 'Servidor no disponible' : error.error.mensaje),
        })
      }
    });
  }

}
