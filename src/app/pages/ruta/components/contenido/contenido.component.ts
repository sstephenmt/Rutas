import { Component, Input,HostListener  } from '@angular/core';
import { Contenido } from 'src/app/interface/contenido.interface';
import { Experiencia } from 'src/app/interface/experiencia.interface';
import { EmergenteService } from '../../services/emergente.service';
import { ContenidoService } from '../../../../services/contenido.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent {
  @Input() experiencias: Experiencia[] = [];
  embedLink!: SafeResourceUrl; 
  
  get contenido() {
    return this.contenidoService.contenido[0];
  }

  constructor(
    private emergenteService: EmergenteService,
    private contenidoService: ContenidoService,
    private sanitizer: DomSanitizer,
  ) {
    this.embedLink = ''; 
    this.convertToEmbedLink();
  }

  convertToEmbedLink() {
    const youtubeLink = this.contenido.ruta_contenido;
    if (youtubeLink) {
      const videoId = youtubeLink.match(/youtube\.com.*(\?v=|\/embed\/|\/\d\/|\/vi\/|\/v\/|https:\/\/youtu\.be\/|\/e\/|watch\?v=|\&v=)([^#\&\?]*).*/i);
      if (videoId && videoId.length > 2) {
        const embedLink = 'https://www.youtube.com/embed/' + videoId[2];
        this.embedLink = this.sanitizer.bypassSecurityTrustResourceUrl(embedLink);
      }
    }
  }

  generarEstilos(inicio: number, fin: number): object {
    if (inicio === fin) {
      return {
        'border-width': '15px',
        'border-style': 'solid',        
        'border-color': `var(--carrera-color-${inicio})`
      };
    }
  
    let borderImage = '';
    let gradient = '';
  
    for (let index = inicio; index <= fin; index++) {
      gradient += `, var(--carrera-color-${index})`;
    }
  
    borderImage = `linear-gradient(to right${gradient})`;
  
    return {
      'border-width': '15px',
      'border-style': 'solid',
      'border-image-source': borderImage,
      'border-image-slice': '1'
    };
  }

  cerrarContenido() {
    this.emergenteService.cerrar();
  }

  @HostListener('window:keydown', ['$event'])
  onWindowKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.cerrarContenido();
    }
  }
}
