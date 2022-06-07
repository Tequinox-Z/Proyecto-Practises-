import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BusinessService } from '../../../modules/Dashboard/Modules/business/Service/business.service';
import { Business } from '../../../core/Interfaces/business/Business';

@Component({
  selector: 'app-select-business',
  templateUrl: './select-business.component.html',
  styleUrls: ['./select-business.component.css']
})
export class SelectBusinessComponent implements OnInit {

  constructor(
    private businessSvr: BusinessService
  ) { }

  business : Business[] = [];


  @Output() cif = new EventEmitter();

  ngOnInit(): void {
    this.businessSvr.getAllBusiness().subscribe({
      next: (businessData: any) => {
        this.business = businessData;
      },
      error: () => {
        
      }
    });
  }


  select(cif: string) {
    this.cif.emit(cif);
  }

}
