import { Component, ViewChild, ElementRef } from '@angular/core'
import { CalifacionService } from '../../services/califacion.service'
import { Calificacion } from 'src/app/interface/calificacion.interface'

@Component({
  selector: 'app-califacion',
  templateUrl: './califacion.component.html',
  styleUrls: ['./califacion.component.css']
})
export class CalifacionComponent {
  @ViewChild('comentario') comentario!: ElementRef<HTMLInputElement>
  puntaje = 0

  constructor(private califacionService: CalifacionService) {} // private califacionService: CalificacionService
  estrellaSeleccionada(id: number) {
    this.puntaje = id
  }
  calificar() {
    if (this.puntaje === 0) {
      alert('No ha seleccionado un puntaje')
      return
    }
    const fechaActual = new Date()
    const dia = fechaActual.getDate()
    const mes = fechaActual.getMonth() + 1
    const año = fechaActual.getFullYear()
    const data = {
      puntaje: this.puntaje + '',
      tag_valoracion: this.comentario.nativeElement.value,
      fecha_valoracion: `${año}-${mes}-${dia}`
    }
    this.califacionService.postCalificacion(data).subscribe(() => {
      alert('Puntaje registrado')
      this.puntaje = 0
      this.comentario.nativeElement.value = ''
    })
  }
}
