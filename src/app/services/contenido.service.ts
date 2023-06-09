import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Contenido } from '../interface/contenido.interface'
import { tap } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ContenidoService {
  private _contenido: Contenido[] = []

  get contenido() {
    return [...this._contenido]
  }

  constructor(private http: HttpClient) {}

  getContenido(id: number) {
    const URL = `http://144.22.45.179:1212/contenido/${id}`
    return this.http
      .get<Contenido[]>(URL)
      .pipe(tap((res) => (this._contenido = res)))
  }
}
