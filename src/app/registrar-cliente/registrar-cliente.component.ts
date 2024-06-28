import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/cliente.model';
<<<<<<< HEAD
import { NgForm } from '@angular/forms';
=======
>>>>>>> 7128e14252fd1f1e6261ffd27a1947a6445d6753

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})
export class RegistrarClienteComponent implements OnInit {
<<<<<<< HEAD
  clientes: Cliente[] = [];
  cliente: Cliente = new Cliente();
=======
  cliente: Cliente = new Cliente();
  clientes: Cliente[] = [];
>>>>>>> 7128e14252fd1f1e6261ffd27a1947a6445d6753
  editMode: boolean = false;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.getClientes();
  }

<<<<<<< HEAD
  getClientes(): void {
    this.clienteService.getClientes().subscribe(
      (data) => {
        this.clientes = data;
      },
      (error) => {
        console.error('Error fetching clients', error);
      }
    );
  }

  registrarCliente(form: NgForm): void {
    if (this.editMode) {
      this.clienteService.actualizarCliente(this.cliente).subscribe(
        (data) => {
          this.resetForm(form);
          this.getClientes();
          alert('Cliente actualizado con éxito');
        },
        (error) => {
          console.error('Error updating client', error);
          if (error.status === 400) {
            alert('Datos inválidos. Por favor, verifica la información ingresada.');
          } else if (error.status === 404) {
            alert('Cliente no encontrado.');
          } else {
            alert('Hubo un error al actualizar el cliente');
          }
        }
      );
    } else {
      this.clienteService.registrarCliente(this.cliente).subscribe(
        (data) => {
          this.resetForm(form);
          this.getClientes();
          alert('Cliente registrado con éxito');
        },
        (error) => {
          console.error('Error registering client', error);
          if (error.status === 400) {
            alert('Datos inválidos. Por favor, verifica la información ingresada.');
          } else {
            alert('Hubo un error al registrar el cliente');
          }
=======
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
>>>>>>> 7128e14252fd1f1e6261ffd27a1947a6445d6753
        }
      );
    }
  }

<<<<<<< HEAD
  editarCliente(cliente: Cliente): void {
    this.cliente = Object.assign({}, cliente);
    this.editMode = true;
=======
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
>>>>>>> 7128e14252fd1f1e6261ffd27a1947a6445d6753
  }

  eliminarCliente(clienteId: number): void {
    this.clienteService.eliminarCliente(clienteId).subscribe(
<<<<<<< HEAD
      (data) => {
        this.getClientes();
        alert('Cliente eliminado con éxito');
      },
      (error) => {
        console.error('Error deleting client', error);
=======
      response => {
        console.log('Cliente eliminado:', response);
        alert('Se eliminó con éxito');
        this.getClientes();
      },
      error => {
        console.error('Error al eliminar cliente:', error);
>>>>>>> 7128e14252fd1f1e6261ffd27a1947a6445d6753
        alert('Hubo un error al eliminar el cliente');
      }
    );
  }

<<<<<<< HEAD
  resetForm(form: NgForm): void {
    form.reset();
    this.cliente = new Cliente();
    this.editMode = false;
  }
=======
  limpiarFormulario(): void {
    this.cliente = new Cliente();
    this.editMode = false;
  }

  editarCliente(cliente: Cliente): void {
    console.log('Editando cliente:', cliente);
    this.cliente = { ...cliente }; // Clonamos el objeto cliente para editarlo
    this.editMode = true;
  }
>>>>>>> 7128e14252fd1f1e6261ffd27a1947a6445d6753
}
