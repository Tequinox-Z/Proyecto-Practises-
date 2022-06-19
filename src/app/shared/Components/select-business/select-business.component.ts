import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BusinessService } from '../../../modules/Dashboard/Modules/business/Service/business.service';
import { Business } from '../../../core/Interfaces/business/Business';

@Component({
  selector: 'app-select-business',
  templateUrl: './select-business.component.html',
  styleUrls: ['./select-business.component.css']
})
export class SelectBusinessComponent implements OnInit {

  // Modal de selección de empresa

  constructor(
    private businessSvr: BusinessService
  ) { }

  business : Business[] = [];                      // Lista de empresas

  @Output() cif = new EventEmitter();

  ngOnInit(): void {
    
    // Obtenemos todas las empresas

    let request = this.businessSvr.getAllBusiness().subscribe({
      next: (businessData: any) => {
        request.unsubscribe();
        this.business = businessData;
      },
      error: () => {
        request.unsubscribe();
      }
    });
  }


  // Selecciona una empresa y emite el cif
  select(cif: string) {
    this.cif.emit(cif);
  }

}
