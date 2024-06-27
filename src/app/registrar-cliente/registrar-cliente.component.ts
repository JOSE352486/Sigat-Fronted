import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/cliente.model';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})
export class RegistrarClienteComponent implements OnInit {
  cliente: Cliente = new Cliente();
  clientes: Cliente[] = [];
  editMode: boolean = false;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.getClientes();
  }

  registrarCliente(): void {
    if (this.editMode) {
      this.actualizarCliente();
    } else {
      this.clienteService.registrarCliente(this.cliente).subscribe(
        response => {
          console.log('Cliente registrado:', response);
          alert('Se registró con éxito');
          this.limpiarFormulario();
          this.getClientes();
        },
        error => {
          console.error('Error al registrar cliente:', error);
          alert('Hubo un error al registrar el cliente');
        }
      );
    }
  }

  getClientes(): void {
    this.clienteService.getCliente().subscribe(
      response => {
        this.clientes = response;
      },
      error => {
        console.error('Error al obtener lista de clientes:', error);
      }
    );
  }

  actualizarCliente(): void {
    if (!this.cliente.PK_Cliente_ID) {
      alert('ID del cliente no encontrado.');
      return;
    }

    this.clienteService.actualizarCliente(this.cliente).subscribe(
      response => {
        console.log('Cliente actualizado:', response);
        alert('Se actualizó con éxito');
        this.limpiarFormulario();
        this.getClientes();
        this.editMode = false;
      },
      error => {
        console.error('Error al actualizar cliente:', error);
        alert(`Hubo un error al actualizar el cliente: ${error.message}`);
      }
    );
  }

  eliminarCliente(clienteId: number): void {
    this.clienteService.eliminarCliente(clienteId).subscribe(
      response => {
        console.log('Cliente eliminado:', response);
        alert('Se eliminó con éxito');
        this.getClientes();
      },
      error => {
        console.error('Error al eliminar cliente:', error);
        alert('Hubo un error al eliminar el cliente');
      }
    );
  }

  limpiarFormulario(): void {
    this.cliente = new Cliente();
    this.editMode = false;
  }

  editarCliente(cliente: Cliente): void {
    console.log('Editando cliente:', cliente);
    this.cliente = { ...cliente }; // Clonamos el objeto cliente para editarlo
    this.editMode = true;
  }
}
