import { Injectable } from '@angular/core'
import { Calificacion } from 'src/app/interface/calificacion.interface'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CalifacionService {
  constructor(private http: HttpClient) {}

  postCalificacion(data: Calificacion) {
    // const URL = `http://localhost:1212/valoracion`
    const URL = `http://144.22.45.179:1212/valoracion`
    return this.http.post(URL, data)
  }
}
