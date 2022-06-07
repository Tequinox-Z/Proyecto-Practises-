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

@Component({
  selector: 'app-degrees',
  templateUrl: './degrees.component.html',
  styleUrls: ['./degrees.component.css']
})
export class DegreesComponent implements OnInit {

  constructor(
    private dashboardSrv: DashboardService,
    private degreeSvr: DegreeService,
    private centerSvr: CenterService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  yearSelected!: string;
  editMode: boolean = false;
  years!: YearsDegree;

  degrees!: ProfessionalDegree[];
  school !: School;

  ngOnInit(): void {
    this.dashboardSrv.setTitle("Ciclos");
    this.loadDegrees(new Date().getFullYear());    
  }


  deleteDegree(idDegree :number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Se borrarán todas las matriculaciones y prácticas",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonText: "Cancelar",
      confirmButtonText: 'Borrar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.degreeSvr.deleteDegree(this.school, idDegree).subscribe({
          next: () => {
            this.loadDegrees(new Date().getFullYear());
          }
        })
      }
    })
  }


  changeYear(event:any) {
    this.loadDegrees(parseInt(event.target.value));
  }

  loadDegrees(year :number) {
    this.centerSvr.getCenterOfAdministrator().subscribe({
      next: (school: School) => {

        this.degreeSvr.getYears(school).subscribe({
          next: (data: any) => {
            this.years = data;
            this.years.years.reverse();
          }
        });

        this.school = school;

        this.degreeSvr.getDegreesByYear(school, year.toString()).subscribe({
          next: (degrees: any) => {
            this.degrees = degrees;
          },
          error: (response) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text:  response.error.mensaje
            })
          }
        })
      },
      error: (response) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text:  response.error.mensaje
        })
      }
    })
  }


  addDegree() {
    this.degreeSvr.addDegree(this.school).subscribe({
      next: () => {
        this.loadDegrees(new Date().getFullYear());
      }
    })
  }

  changeImage(event: string, idDegree: number) {
    this.degreeSvr.getDegree(this.school, idDegree).subscribe({
      next: (degree: ProfessionalDegree) => {

        degree.image = environment.serverFileAddress + "/files/" + event;
        
        this.degreeSvr.updateDegree(this.school, degree).subscribe({
          next: () => {
            this.loadDegrees(new Date().getFullYear());
          }
        });
      }
    });
  }


  goTo(idDegree: any) {
    if (!this.editMode) {
      this.router.navigate(["../view/" + idDegree], {relativeTo: this.route});
    }
  }

  changeName(idDegree:any) {
    if (this.editMode) {

      Swal.fire({
        title: 'Indique nuevo nombre',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonText: 'Cambiar',
        showLoaderOnConfirm: true,
        preConfirm: (result) => {
          if (result.trim().length == 0) {
            this.changeName(idDegree);
          }
          else {
            this.degreeSvr.getDegree(this.school, idDegree).subscribe({
              next: (degree: ProfessionalDegree) => {

                degree.name = result;
                
                this.degreeSvr.updateDegree(this.school, degree).subscribe({
                  next: () => {
                    this.loadDegrees(new Date().getFullYear());
                  },
                  error: (error) => {
                    console.log(error);
                  }
                });
              }
            });
          }
        },
        allowOutsideClick: () => !Swal.isLoading()
      });
    }
  } 

}
