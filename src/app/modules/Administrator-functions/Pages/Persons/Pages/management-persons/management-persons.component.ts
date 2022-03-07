import { Component, OnDestroy, OnInit } from '@angular/core';
import { AdministratorService } from '../../../../Services/AdministratorService/administrator.service';
import { Administrator } from '../../../../../../core/Interfaces/administrator/administrator';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-management-persons',
  templateUrl: './management-persons.component.html',
  styleUrls: ['./management-persons.component.css']
})
export class ManagementPersonsComponent implements OnInit, OnDestroy {

  constructor(private administrationService: AdministratorService) { }
  
  administrators: Administrator[] = [];                                                        // Lista de administradores

  dtOptions: DataTables.Settings = {};                                                         // Ajustes de la datatable
  dtTrigger: Subject<any> = new Subject<any>();                                                // Trigger de la datatable

  ngOnInit(): void {

    // Obtiene todos los administradores

    this.administrationService.getAll()
    .subscribe({
      next: (response: Administrator[]) => {
        this.administrators = response;                                                        // Asignamos los administradores
        this.dtTrigger.next(this.administrators);                                              // Le pasamos los datos a la tabla
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
  

}
