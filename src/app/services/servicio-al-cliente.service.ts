// servicio-al-cliente.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServicioAlCliente } from '../models/servicio-al-cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioAlClienteService {
  private baseUrl = 'http://sigat-backend.onrender.com/api/v1/servicioAlCliente';

  constructor(private http: HttpClient) {}

  getAllServicios(): Observable<ServicioAlCliente[]> {
    return this.http.get<ServicioAlCliente[]>(`${this.baseUrl}`);
  }

  createServicio(servicio: ServicioAlCliente): Observable<ServicioAlCliente> {
    return this.http.post<ServicioAlCliente>(`${this.baseUrl}`, servicio);
  }

  deleteServicio(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
