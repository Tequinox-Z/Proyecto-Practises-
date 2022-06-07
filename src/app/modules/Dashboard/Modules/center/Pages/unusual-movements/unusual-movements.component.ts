import { Component, OnInit } from '@angular/core';
import { CenterService } from '../../Service/center.service';
import { Router } from '@angular/router';
import { School } from '../../../../../../core/Interfaces/school/school';
import { UnusualMovement } from '../../../../../../core/Interfaces/UnusualMovement/UnusualMovement';
import Swal from 'sweetalert2';
import { DashboardService } from '../../../../Services/Dashboard-service/dashboard.service';

@Component({
  selector: 'app-unusual-movements',
  templateUrl: './unusual-movements.component.html',
  styleUrls: ['./unusual-movements.component.css']
})
export class UnusualMovementsComponent implements OnInit {

  constructor(
    private centerSvr: CenterService,
    private router: Router,
    private dashboardSrv: DashboardService
  ) { }

  school!: School;

  movements: UnusualMovement[] = [];

  ngOnInit(): void {
    this.dashboardSrv.setTitle("Movimientos inusuales");
    
    this.centerSvr.getCenterOfAdministrator().subscribe({
      next: (school: School) => {
        
        this.school = school;

        this.centerSvr.getMovementsBySchool(school).subscribe({
          next: (movements: any) => {
            this.movements = movements.reverse();
          }
        })
      },
      error: () => {
        this.router.navigateByUrl("../centers");
      }
    });

  }


  deleteAll() {
    Swal.fire({
      title: '¿Borrar todo?',
      text: "Esta acción es no es reversible",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "Cancelar",
      confirmButtonText: 'Borrar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.centerSvr.deleteAllMovement(this.school).subscribe({
          next: () => {
            this.movements = [];
          }
        })
      }
    })
  }
}
