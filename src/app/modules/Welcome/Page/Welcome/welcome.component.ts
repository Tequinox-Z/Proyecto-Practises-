import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { AuthService } from '../../../Auth/Services/Auth-service/auth.service';
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
      this.router.navigateByUrl('/');                                              // Comprobamos si el usuario tiene un token, si lo tiene lo redirigimos a la aplicación
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

    /**
     * Este código nos permite cambiar el texto de bienvenida de la aplicación
     */
    const typed = new Typed('.typed', {
      strings: [
                ' Practises management',
                ' Administrador de prácticas'                                            // Texto
      ],
      typeSpeed: 75,                                                                     // Velocidad de tipado
      shuffle: true,                                                                     // Aleatorio
      backSpeed: 50,                                                                     // Velocidad de borrado
      loop: true,                                                                        // Repetir
      cursorChar: '<span id="color">_</span>',                                           // Cursor
      fadeOutClass: 'typed-fade-out',                                                    // Clase al tipear
      backDelay: 1500                                                                    // Tiempo de retorno
  });

  }

}
