import { Component, ViewChild, ElementRef } from '@angular/core'
import { SolicitudService } from './services/solicitud.service'

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  @ViewChild('nombre') nombre!: ElementRef<HTMLInputElement>
  @ViewChild('apPaterno') apPaterno!: ElementRef<HTMLInputElement>
  @ViewChild('apMaterno') apMaterno!: ElementRef<HTMLInputElement>
  @ViewChild('telefono') telefono!: ElementRef<HTMLInputElement>
  @ViewChild('correo') correo!: ElementRef<HTMLInputElement>
  @ViewChild('fecha') fecha!: ElementRef<HTMLInputElement>
  @ViewChild('modalidad') modalidad!: ElementRef<HTMLInputElement>
  constructor(private solicitudService: SolicitudService) {}
  contactar() {
    const contacto = {
      id_carrera: 1,
      nombres: this.nombre.nativeElement.value,
      apellido_paterno: this.apPaterno.nativeElement.value,
      apellido_materno: this.apMaterno.nativeElement.value,
      correo: this.correo.nativeElement.value,
      telefono: this.telefono.nativeElement.value,
      fecha_nacimiento: this.fecha.nativeElement.value,
      modalidad: this.modalidad.nativeElement.value
    }
    this.solicitudService.postSolicitud(contacto).subscribe(() => {
      alert('Solicitud enviada')
    })
  }
}
