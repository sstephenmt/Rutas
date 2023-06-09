import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RutaComponent } from './ruta.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { BarraComponent } from './components/barra/barra.component';
import { CiclosComponent } from './components/ciclos/ciclos.component';
import { NgxView360Module } from 'ngx-view360';



@NgModule({
  declarations: [
    RutaComponent,
    ContenidoComponent,
    ExperienciaComponent,
    BarraComponent,
    CiclosComponent
  ],
  imports: [
    CommonModule,
    NgxView360Module
  ]
})
export class RutaModule { }
