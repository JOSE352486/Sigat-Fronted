import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  readonly apiUrl = 'https://sigat-backend.onrender.com/api/v1/cliente';

  constructor(private http: HttpClient) { }

  registrarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.apiUrl}/insertar`, cliente);
  }

  getCliente(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.apiUrl}/listar`);
  }

  actualizarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.apiUrl}/actualizar/${cliente.PK_Cliente_ID}`, cliente);
  }

  eliminarCliente(clienteId: number): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.apiUrl}/eliminar/${clienteId}`);
  }
}
