import { Component, OnInit } from '@angular/core';
import { CenterService } from '../../Service/center.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-center',
  templateUrl: './my-center.component.html',
  styleUrls: ['./my-center.component.css']
})
export class MyCenterComponent implements OnInit {

  constructor(
    private centerSrv: CenterService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.centerSrv.getCenterOfAdministrator()
    .subscribe(
      {
        next: (response) => {
          console.log("response");
          console.log(response);
        },
        error: (error) => {
          this.router.navigate(["../centers"], { relativeTo: this.route });           // En caso de que sea estudiante
        }
      }
    )
  }

}
