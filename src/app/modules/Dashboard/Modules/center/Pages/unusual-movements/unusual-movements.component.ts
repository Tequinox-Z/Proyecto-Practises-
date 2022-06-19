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

  
  // Página de movimientos inusuales


  constructor(
    private centerSvr: CenterService,
    private router: Router,
    private dashboardSrv: DashboardService
  ) { }

  school!: School;                        // Centro

  movements: UnusualMovement[] = [];      // Lista de movimientos inusuales

  ngOnInit(): void {

    // Asignamos el título

    this.dashboardSrv.setTitle("Movimientos inusuales");
    
    // Obtenemos el centro del administrador

    let request = this.centerSvr.getCenterOfAdministrator().subscribe({
      next: (school: School) => {
        request.unsubscribe();
        
        // Establecemos el centro

        this.school = school;

        let request2 = this.centerSvr.getMovementsBySchool(school).subscribe({
          next: (movements: any) => {
            request2.unsubscribe();

            // Establecemos los movimientos inusuales
            
            this.movements = movements.reverse();
          }
        })
      },
      error: () => {
        request.unsubscribe();

        // En caso de error navegamos más arriba
        
        this.router.navigateByUrl("../centers");
      }
    });

  }

  // Borra todos los registros

  deleteAll() {

    // Preguntamos al usuario

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

        // Borramos en caso afirmativo

        let request = this.centerSvr.deleteAllMovement(this.school).subscribe({
          next: () => {
            request.unsubscribe();
            
            this.movements = [];
          }
        })
      }
    })
  }
}
