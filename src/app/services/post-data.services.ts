import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Experiencia {
  titulo: string;
  subtitulo: string;
  parrafo: string;
  ruta_contenido: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostDataService {
  constructor(private http: HttpClient) { }
  

  //para las sedes
  get_sedes() {
    let url = 'https://restapi-production-575c.up.railway.app/api/listarSedes';
    return this.http.get(url);
  }
  //para los ciclos 
  get_ciclos() {
    let url = 'https://restapi-production-575c.up.railway.app/api/listarCiclos';
    return this.http.get(url);
  }
  // ciclos por carrera
  get_ciclos_carrera(ID_carrera: number) { 
    let url = `https://restapi-production-575c.up.railway.app/api/listarNumCiclosCarrera?id_carrera=${ID_carrera}`;
    return this.http.get(url);
  }

  //para las carreras id_carrerca id_ciclo id_sede
  get_carreras_web() {
    let url = 'https://restapi-production-575c.up.railway.app/api/llamarCarreraWeb';
    return this.http.get(url);
  }
  //para las multimedias de las exp --> en desarrollo
  get_multimedia() {
    let url = '';
    return this.http.get(url);
  }
  get_listar_carreras_sedes(ID: number){
    let url = `https://restapi-production-575c.up.railway.app/api/listarCarreraSede?id_sede=${ID}` ;
    return this.http.get(url);
  }
  //llamar al contendido de las exp con el id_exp
  get_contenido_exp(ID: number){
    let url = `https://restapi-production-575c.up.railway.app/api/llamarContenidoExpWeb?id_experiencia=${ID}` ;
    return this.http.get<Experiencia>(url);
  }
 
  obtenerDatos(id_sede: number, id_carrera: number) {
  const url = `https://restapi-production-575c.up.railway.app/api/botonExperienciaCarrera?id_carrera=${id_carrera}&id_sede=${id_sede}`;
  return this.http.get<any[]>(url);
}
  
}