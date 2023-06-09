import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Solicitud } from 'src/app/interface/solicitud.interface'

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  constructor(private http: HttpClient) {}
  postSolicitud(data: Solicitud) {
    const URL = `http://localhost:1212/solicitud`
    // const URL = `http://144.22.45.179:9000/api/solicitud`
    return this.http.post(URL, data)
  }
}