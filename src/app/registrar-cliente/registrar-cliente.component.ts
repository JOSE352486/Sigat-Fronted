import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/cliente.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})
export class RegistrarClienteComponent implements OnInit {
  clientes: Cliente[] = [];
  cliente: Cliente = new Cliente();
  editMode: boolean = false;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.getClientes();
  }

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
        }
      );
    }
  }

  editarCliente(cliente: Cliente): void {
    this.cliente = Object.assign({}, cliente);
    this.editMode = true;
  }

  eliminarCliente(clienteId: number): void {
    this.clienteService.eliminarCliente(clienteId).subscribe(
      (data) => {
        this.getClientes();
        alert('Cliente eliminado con éxito');
      },
      (error) => {
        console.error('Error deleting client', error);
        alert('Hubo un error al eliminar el cliente');
      }
    );
  }

  resetForm(form: NgForm): void {
    form.reset();
    this.cliente = new Cliente();
    this.editMode = false;
  }
}
