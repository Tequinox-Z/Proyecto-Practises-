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


// Vista de ciclos


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

  yearSelected!: string;                // Año seleccionado
  editMode: boolean = false;            // Modo edición
  years!: YearsDegree;                  // Años

  degrees!: ProfessionalDegree[];        // CIclos
  school !: School;                    // Centro

  ngOnInit(): void {
    // Establecemos el titulo y cargamos los datos

    this.dashboardSrv.setTitle("Ciclos");
    this.loadDegrees(new Date().getFullYear());    
  }


  // Borra un ciclo
  deleteDegree(idDegree :number) {

    // Preguntamos

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
        // Borramos
        let request = this.degreeSvr.deleteDegree(this.school, idDegree).subscribe({
          next: () => {
            request.unsubscribe();
            // Cargamos de nuevo
            this.loadDegrees(new Date().getFullYear());
          }
        })
      }
    })
  }


  // Cambia el año
  changeYear(event:any) {
    // Cargamos los ciclos
    this.loadDegrees(parseInt(event.target.value));
  }

  // Carga los ciclos

  loadDegrees(year :number) {

    // Obtenemos la escuela

    let request = this.centerSvr.getCenterOfAdministrator().subscribe({
      next: (school: School) => {
        request.unsubscribe();

        // Obtenemos los años

        let request2 = this.degreeSvr.getYears(school).subscribe({
          next: (data: any) => {

            request2.unsubscribe();

            this.years = data;
            this.years.years.reverse();
          }
        });

        // Establecemos la escuela

        this.school = school;


        // Cargamos los ciclos

        let request3 = this.degreeSvr.getDegreesByYear(school, year.toString()).subscribe({
          next: (degrees: any) => {
            request3.unsubscribe();

            this.degrees = degrees;
          },
          error: (response) => {
            request3.unsubscribe();

            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text:  response.error.mensaje
            })
          }
        })
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


  // Añade un nuevo ciclo

  addDegree() {
    // Añadimos

    let request = this.degreeSvr.addDegree(this.school).subscribe({
      next: () => {
        request.unsubscribe();
        // Cargamos
        this.loadDegrees(new Date().getFullYear());
      }
    })
  }

  // Cambia la imagen de un ciclo

  changeImage(event: string, idDegree: number) {

    // Cambiamos

    let request = this.degreeSvr.getDegree(this.school, idDegree).subscribe({
      next: (degree: ProfessionalDegree) => {

        request.unsubscribe();

        degree.image = environment.serverFileAddress + "/files/" + event;
        
        let request2 = this.degreeSvr.updateDegree(this.school, degree).subscribe({
          next: () => {
            request2.unsubscribe();

            this.loadDegrees(new Date().getFullYear());
          },
          error: (response) => {
            request2.unsubscribe();

            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text:  response.error.mensaje
            })
          }
        });
      }
    });
  }

  // Ir a ciclo

  goTo(idDegree: any) {
    if (!this.editMode) {
      this.router.navigate(["view/" + idDegree], {relativeTo: this.route});
    }
  }

  // Cambia el nombre

  changeName(idDegree:any) {
    if (this.editMode) {
      
      // Preguntamos...

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
            // Vovemos a preguntar por el nombre
            this.changeName(idDegree);
          }
          else {
            let request = this.degreeSvr.getDegree(this.school, idDegree).subscribe({
              next: (degree: ProfessionalDegree) => {
                request.unsubscribe();

                degree.name = result;
                
                // Obtenemos el ciclo
                
                let request2 = this.degreeSvr.updateDegree(this.school, degree).subscribe({
                  next: () => {
                    request2.unsubscribe();

                    // Cargamos los ciclos
                    
                    this.loadDegrees(new Date().getFullYear());
                  },
                  error: (response) => {
                    request2.unsubscribe();

                    Swal.fire({
                      icon: 'error',
                      title: 'Oops...',
                      text:  response.error.mensaje
                    })
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
