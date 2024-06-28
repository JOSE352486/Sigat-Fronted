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

<<<<<<< HEAD
  getClientes(): Observable<Cliente[]> {
=======
  getCliente(): Observable<Cliente[]> {
>>>>>>> 7128e14252fd1f1e6261ffd27a1947a6445d6753
    return this.http.get<Cliente[]>(`${this.apiUrl}/listar`);
  }

  actualizarCliente(cliente: Cliente): Observable<Cliente> {
<<<<<<< HEAD
    return this.http.put<Cliente>(`${this.apiUrl}/actualizar`, cliente);
=======
    return this.http.put<Cliente>(`${this.apiUrl}/actualizar/${cliente.PK_Cliente_ID}`, cliente);
>>>>>>> 7128e14252fd1f1e6261ffd27a1947a6445d6753
  }

  eliminarCliente(clienteId: number): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.apiUrl}/eliminar/${clienteId}`);
  }
}
