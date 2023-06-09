import { Injectable } from '@angular/core';
import { Carrera } from '../interface/carrera.interface';
import { HttpClient } from '@angular/common/http';
import { catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarreraService {
  constructor(private http: HttpClient) {}

  getCarreras(id: number) {
    const URL = `http://144.22.45.179:1212/carrera/sede/${id}`;
    return this.http.get<Carrera[]>(URL);
  }

  getCarrera(id: number) {
    const URL = `http://144.22.45.179:1212/carrera/${id}`;
    return this.http.get<Carrera>(URL);
  }
}
