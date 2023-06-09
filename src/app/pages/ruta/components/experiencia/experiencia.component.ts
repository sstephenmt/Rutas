import { Component, Input } from '@angular/core'
import { Experiencia } from 'src/app/interface/experiencia.interface'
import { EmergenteService } from '../../services/emergente.service'
import { ContenidoService } from '../../../../services/contenido.service'

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  @Input() experiencias: Experiencia[] = []
  @Input() ciclos: number = 10

  constructor(
    private emergenteService: EmergenteService,
    private contenidoService: ContenidoService
  ) {}
  tabla() {
    return {
      display: 'grid',
      'grid-template-columns': `repeat(${this.ciclos},1fr)`,
      'grid-template-rows': `repeat(8,40px)`,
      gap: '5px 10px'
    }
  }

  posicion(inicio: number, fin: number, fila: number) {
    const largo = fin - inicio + 1
    let color = this.background(inicio, fin, largo)
    return {
      'grid-column': `${inicio} / span ${largo}`,
      'grid-row': `${fila} / span 1`,
      'background': color
    }
  }
  background(inicio: number, fin: number, largo: number) {
    let color = ''
    if (largo > 1) {
      let gradient = ''
      for (let index = inicio; index <= fin; index++) {
        gradient += `, var(--carrera-color-${index})`
      }
      color = `linear-gradient(80deg ${gradient})`
    } else {
      color = `var(--carrera-color-${inicio})`
    }
    return color
  }

  abrirContenido(id: number) {
    this.contenidoService.getContenido(id).subscribe((res) => {
      this.emergenteService.abrir()
      console.log(res)
    })
  }
}
