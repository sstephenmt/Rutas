import { Component } from '@angular/core';
import { CarreraService } from '../../services/carrera.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SedeService } from '../../services/sede.service';
import { Carrera } from 'src/app/interface/carrera.interface';
import { Sede } from '../../interface/sede.interface';

@Component({
  selector: 'app-sede',
  templateUrl: './sede.component.html',
  styleUrls: ['./sede.component.css'],
})
export class SedeComponent {
  id: number = 0;

  carreras: Carrera[] = [];

  sede: Sede = {
    id_sede: 0,
    nombre_sede: '',
    ubicacion_sede: '',
    imagen_sede: '',
    descripcion_sede: '',
  };

  constructor(
    private carreraService: CarreraService,
    private sedeService: SedeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.sedeService.getSede(this.id).subscribe((res) => (this.sede = res));
      this.carreraService
        .getCarreras(this.id)
        .subscribe((res) => (this.carreras = res));
    });
  }

  verRuta(carrera: Carrera) {
    this.router.navigate(['/ruta', carrera.id_carrera]);
  }
}
