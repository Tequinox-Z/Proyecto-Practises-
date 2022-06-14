import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from "chart.js";
import { CenterService } from '../../Service/center.service';
import { School } from '../../../../../../core/Interfaces/school/school';
import { RegTemp } from '../../../../../../core/Interfaces/RegTemp/RegTemp';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-temperature-humidity',
  templateUrl: './temperature-humidity.component.html',
  styleUrls: ['./temperature-humidity.component.css']
})
export class TemperatureHumidityComponent implements OnInit {

  constructor(private centerSvr: CenterService) { }

  data: RegTemp[] = [];

  ngOnInit() {


    this.centerSvr.getCenterOfAdministrator().subscribe({
      next: (school: School) => {
        this.centerSvr.getTemperature(school).subscribe({
          next: (response: any) => {
           
            let humedad: any = [];
            let grados: any = [];
            let indexC: any = [];
            let labels: any = [];

            this.data = response;
            this.data = this.data.reverse();

            this.data.forEach((current: RegTemp) => {
              let hour: Date = new Date(current.date!);

              console.log(hour);

              labels.push(hour.getHours() + "h")
              grados.push(current.celcius);
              indexC.push(current.heatIndexf);
              humedad.push(current.humidity);
            });
      
            new Chart(this.elemento.nativeElement, {
              type: "line",
              data: {
                labels: labels,
                datasets: [
                  {
                    label: "Humedad %",
                    data: humedad,
                    backgroundColor: "#89C4FF",
                    borderColor: "#3b83FF"
                  },
                  {
                    label: "Grados celcius Cº",
                    data: grados,
                    backgroundColor: "#FFCA67",
                    borderColor: "#FFAE16"
                  },
                  {
                    label: "Índice de calor Cº",
                    data: indexC,
                    borderColor: "#FF1515",
                    backgroundColor: "#FF5959"
                  }
                ]
              }
            });      
          },
          error: (response) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text:
                response.error.mensaje == undefined
                  ? "Servidor no disponible"
                  : response.error.mensaje,
            });
          }
        })
      },
      error: (response) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text:
            response.error.mensaje == undefined
              ? "Servidor no disponible"
              : response.error.mensaje,
        });
      }
    });


  }


  @ViewChild("graphic", { static: true}) elemento!: ElementRef;




}