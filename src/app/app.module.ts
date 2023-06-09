import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { InicioModule } from './pages/inicio/inicio.module';
import { SedeModule } from './pages/sede/sede.module';
import { RutaModule } from './pages/ruta/ruta.module';
import { ContactoModule } from './pages/contacto/contacto.module';


@NgModule({
  declarations: [
    AppComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    SharedModule,
    CommonModule,
    InicioModule,
    SedeModule,
    RutaModule,
    ContactoModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
  ,
})
export class AppModule { }
