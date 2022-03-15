import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { AdministratorService } from '../../../../Services/AdministratorService/administrator.service';
import { Administrator } from '../../../../../../core/Interfaces/administrator/administrator';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { CentersService } from '../../../Centers/Services/Centers-service/Centers.service';

@Component({
  selector: 'app-management-persons',
  templateUrl: './management-persons.component.html',
  styleUrls: ['./management-persons.component.css']
})
export class ManagementPersonsComponent implements OnInit, OnDestroy {

  constructor(private administrationService: AdministratorService, private centerService: CentersService) { }
  
  administrators: Administrator[] = [];                                                        // Lista de administradores
    
  dtOptions: DataTables.Settings = {};                                                         // Ajustes de la datatable
  dtTrigger: Subject<any> = new Subject<any>();                                                // Trigger de la datatable

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      responsive: true,
      language: {
        url: 'assets/es-ES.json'
      }
    };

    // Obtiene todos los administradores

    this.administrationService.getAll(this.centerService.getIdSchool() + '')
    .subscribe({
      next: (response: Administrator[]) => {
        this.administrators = response;                                                  // Asignamos los administradores
        this.dtTrigger.next(this.dtOptions);                                             // Le pasamos los datos a la tabla
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
  
  /**
   * Nos desubscribimos del trigger de la tabla
   */
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }


  deleteAdmin(dniUser: string) {

    Swal.fire({
      title: 'Borrar',
      text: "Se eliminará este administradror de esta escuela",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
          this.administrationService.removeFromSchool(dniUser)
          .subscribe({
            next: () => {
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Borrado',
                showConfirmButton: false,
                timer: 1500
              })
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
    })
  }
  

}
