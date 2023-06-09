import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ExperienciaService } from '../../services/experiencia.service'
import { CarreraService } from '../../services/carrera.service'
import { Experiencia } from 'src/app/interface/experiencia.interface'
import { Carrera } from 'src/app/interface/carrera.interface'
import { BarraService } from 'src/app/services/barra.service'
import { Barra } from 'src/app/interface/barra.interface'
import { EmergenteService } from './services/emergente.service'

@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.component.html',
  styleUrls: ['./ruta.component.css']
})
export class RutaComponent {
  id: number = 1
  experiencias: Experiencia[] = []
  barras: Barra[] = []
  get estado() {
    return this.emergenteService.estado
  }

  carrera: Carrera = {
    id_carrera: 0,
    id_sede: 0,
    id_ciclo: 10,
    nombre_carrera: '',
    imagen_carrera: '',
    descripcion_carrera: ''
  }

  constructor(
    private route: ActivatedRoute,
    private experienciaService: ExperienciaService,
    private carreraService: CarreraService,
    private barraService: BarraService,
    private emergenteService: EmergenteService
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = +params['id']
      this.carreraService
        .getCarrera(this.id)
        .subscribe((res) => (this.carrera = res))
      this.experienciaService
        .getExperiencias(this.id)
        .subscribe((res) => (this.experiencias = res))
      this.barraService
        .getBarras(this.id)
        .subscribe((res) => (this.barras = res))
    })
  }

  // tabla() {
  //   return {
  //     display: 'grid',
  //     'grid-template-columns': `repeat(${this.carrera.id_ciclo},1fr)`,
  //     'grid-template-rows': `repeat(8,50px)`,
  //     gap: '16px 30px',
  //   };
  // }

  // posicion(inicio: number, fin: number, fila: number) {
  //   const largo = fin - inicio + 1;
  //   return {
  //     'grid-column': `${inicio} / span ${largo}`,
  //     'grid-row': `${fila} / span 1`,
  //   };
  // }
}
