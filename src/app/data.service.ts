import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://sigat-backend.onrender.com/api'; // URL de tu backend

  constructor(private http: HttpClient) { }

  // Método para registrar un cliente
  registrarCliente(cliente: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/clientes`, cliente, httpOptions);
  }

  // Método para registrar una reserva
  registrarReserva(reserva: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/reservas`, reserva, httpOptions);
  }

  // Método para servicio al cliente
  servicioCliente(query: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/servicio-cliente`, query, httpOptions);
  }
}
