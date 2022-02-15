import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { AuthService } from '../../../Auth/Services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    
    if (this.auth.getToken() != null) {
      this.router.navigateByUrl('/');
    }

    /*const cargarImagen = (entradas:any) => {
      entradas.forEach((entrada:any) => {
          if (entrada.isIntersecting) {
              entrada.target.classList.remove('invisible');
          }
          else {
              entrada.target.classList.add('invisible');
          }
      })
    }

    const observador = new IntersectionObserver(cargarImagen, {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: 0.5,
    })

    document.querySelectorAll('.efect').forEach((image) => {
        observador.observe(image);
    })*/

    const typed = new Typed('.typed', {
      strings: [
                ' Practises management',
                ' Administrador de prácticas'
      ],
      typeSpeed: 75,
      shuffle: true,
      backSpeed: 50,
      loop: true,
      cursorChar: '<span id="color">_</span>',
      fadeOutClass: 'typed-fade-out',
      backDelay: 1500
  });

  }

}
