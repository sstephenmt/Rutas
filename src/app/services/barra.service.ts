import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Barra } from '../interface/barra.interface';

@Injectable({
  providedIn: 'root',
})
export class BarraService {
  constructor(private http: HttpClient) {}

  getBarras(id: number) {
    const URL = `http://144.22.45.179:1212/barra/${id}`;
    return this.http.get<Barra[]>(URL);
  }
}
