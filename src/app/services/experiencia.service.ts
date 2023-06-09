import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError, of } from 'rxjs';
import { Experiencia } from '../interface/experiencia.interface';

@Injectable({
  providedIn: 'root',
})
export class ExperienciaService {
  private _experiencias: Experiencia[] = [];

  get experiencias() {
    return [...this._experiencias];
  }

  constructor(private http: HttpClient) {}

  getExperiencias(id: number) {
    const url = `http://144.22.45.179:1212/experiencia/${id}`;
    return this.http.get<Experiencia[]>(url).pipe(
      tap((resp) => (this._experiencias = resp)),
      catchError((err) => of(err))
    );
  }
}
