import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmergenteService {
  private _estado = false;

  get estado() {
    return this._estado;
  }

  constructor() {}

  abrir() {
    this._estado = true;
  }
  cerrar() {
    this._estado = false;
  }
}
