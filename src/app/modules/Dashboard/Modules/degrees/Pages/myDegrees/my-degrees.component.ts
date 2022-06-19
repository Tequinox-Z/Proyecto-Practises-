import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../../Services/Dashboard-service/dashboard.service';
import { DegreeService } from '../../Service/degree.service';
import { CenterService } from '../../../center/Service/center.service';
import { School } from '../../../../../../core/Interfaces/school/school';
import { ProfessionalDegree } from 'src/app/core/Interfaces/ProfessionalDegree/ProfessionalDegree';
import Swal from 'sweetalert2';
import { YearsDegree } from '../../../../../../core/Interfaces/YearsDegree/YearsDegree';
import { environment } from '../../../../../../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../Services/UserService/user.service';


// Vista de mis ciclos

@Component({
  selector: 'app-my-degrees',
  templateUrl: './my-degrees.component.html',
  styleUrls: ['./my-degrees.component.css']
})
export class MyDegrees implements OnInit {

  constructor(
    private dashboardSrv: DashboardService,
    private degreeSvr: DegreeService,
    private centerSvr: CenterService,
    private router: Router,
    private route: ActivatedRoute,
    private userSrv: UserService
  ) { }

  
  editMode: boolean = false;          // Modo de edición
  years!: YearsDegree;                // Años

  degrees!: ProfessionalDegree[];     // Ciclos

  ngOnInit(): void {

    // Cambiamos el titulo y cargamos

    this.dashboardSrv.setTitle("Mis ciclos");
    this.loadDegrees();    
  }


  // Carga los ciclos
  
  loadDegrees() {

    let request = this.centerSvr.getDegreesFromDni(this.userSrv.getDni()!).subscribe({
      next: (degrees: any) => {
        request.unsubscribe();

        this.degrees = degrees;
      },
      error: (response) => {

        request.unsubscribe();

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text:  response.error.mensaje
        })
      }
    })
  }


  // Ir a ciclo

  goTo(idDegree: any) {
    if (!this.editMode) {
      this.router.navigate(["view/" + idDegree], {relativeTo: this.route});
    }
  }

}
