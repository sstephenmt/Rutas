import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { CalifacionComponent } from './components/califacion/califacion.component';



@NgModule({
  declarations: [
    InicioComponent,
    CalifacionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InicioModule { }
