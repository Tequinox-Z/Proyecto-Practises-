import { Component, OnDestroy, OnInit } from '@angular/core';
import { AdministratorService } from '../../../../Services/AdministratorService/administrator.service';
import { Administrator } from '../../../../../../core/Interfaces/administrator/administrator';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-management-persons',
  templateUrl: './management-persons.component.html',
  styleUrls: ['./management-persons.component.css']
})
export class ManagementPersonsComponent implements OnInit, OnDestroy {

  constructor(private administrationService: AdministratorService) { }
  
  administrators: Administrator[] = [];

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  ngOnInit(): void {


    this.administrationService.getAll()
    .subscribe({
      next: (response: Administrator[]) => {
        this.administrators = response;
        this.dtTrigger.next(this.administrators);
      },
      error: () => {

      }
    })
  }
  

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  

}
