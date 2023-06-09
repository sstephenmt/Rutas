import { Component, OnInit } from '@angular/core';
import { PostDataService } from './services/post-data.services';
import { SedeService } from './services/sede.service';

interface all_carreras{   
  ID_carrera: number;
  nombre_carrera: string;   
}
interface all_sedes{ 
  ID: number;
  NombreSedes: string; 
}
interface carreras_web{
  id_carrera: number;
  id_sede: number;
  id_ciclo: number;
  nombre_carrera: string;
}
interface experiencia{
  titulo: string;
  subtitulo: string;
  parrafo: string;
  ruta_contenido: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  datos: any[] = []; 
  textoVariable: string = 'Carrera';
  title = 'Ruta de experiencias UC';  
  experienciaId: number=1;
  showPopup = false;
  
  all_sedes: any = [];

  all_carreras: any = [];

  ciclos_carrera: any = [];

  carreras_web: any=[];

  experienciaSeleccionada: experiencia = {
    titulo: 'Titulo',
    subtitulo: 'Subtitulo',
    parrafo: 'Parrafo',
    ruta_contenido: 'Ruta'
  };
  experiencias: experiencia[] = [];
 

  constructor(
    private post: PostDataService,
    private sedeService:SedeService
    ) {
    this.post.get_sedes().subscribe((data) => {      
      this.all_sedes = data;
    });    
    this.post.get_carreras_web().subscribe((data) => {
      this.carreras_web=data;
    })
    this.sedeService.getSedes().subscribe()
    
  } 
  
  images = [
    {id: 1, src: 'assets/ciclos/1.png'},
    {id: 2, src: 'assets/ciclos/2.png'},
    {id: 3, src: 'assets/ciclos/3.png'},
    {id: 4, src: 'assets/ciclos/4.png'},
    {id: 5, src: 'assets/ciclos/5.png'},
    {id: 6, src: 'assets/ciclos/6.png'},
    {id: 7, src: 'assets/ciclos/7.png'},
    {id: 8, src: 'assets/ciclos/8.png'},
    {id: 9, src: 'assets/ciclos/9.png'},
    {id: 10, src: 'assets/ciclos/10.png'},
    {id: 11, src: 'assets/ciclos/11.png'},
    {id: 12, src: 'assets/ciclos/12.png'},
    {id: 13, src: 'assets/ciclos/13.png'},
    {id: 14, src: 'assets/ciclos/14.png'},
  ];
  
  displayedImages: { id: number, src: string }[] = []; 
  obtenerDatos() {
    const id_sede = 1; // Coloca el valor deseado para id_sede
    const id_carrera = 4; // Coloca el valor deseado para id_carrera

    this.post.obtenerDatos(id_sede, id_carrera).subscribe(
      (response) => {
        this.datos = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  ngOnInit() {
    this.displayedImages = this.images.slice(0, 10);   
    this.obtenerDatos();
  }

  toggleMenu() {
    console.log('Toggle menu');
    
  }
  onSedesClick(id_sede: number) {
    // Filtrar las carreras que corresponden a la sede seleccionada
    const carrerasFiltradas = this.carreras_web.filter((c: carreras_web) => c.id_sede === id_sede);
    
    // Obtener solo los campos necesarios
    const carreras = carrerasFiltradas.map((c: carreras_web) => ({id_carrera: c.id_carrera, nombre_carrera: c.nombre_carrera}));

    // Asignar los resultados a this.all_carreras
    this.all_carreras = carreras;
  }

  onCarreraClick(idCarrera: number) {
    // Obtener el objeto carrera correspondiente al ID de la carrera seleccionada
    const carrera = this.carreras_web.find((c: carreras_web) => c.id_carrera === idCarrera);
  
    // Obtener el nombre de la carrera
    const nombreCarrera = carrera ? carrera.nombre_carrera : '';
  
    // Obtener el ID del ciclo correspondiente a la carrera seleccionada
    const idCiclo = carrera ? carrera.id_ciclo : 0;
  
    // Asignar los valores correspondientes a las variables
    this.textoVariable = nombreCarrera;
    this.displayedImages = this.images.slice(0, idCiclo);
  }
}
