import { Component } from '@angular/core';
import { ServicioAlClienteService } from '../services/servicio-al-cliente.service';
import { ServicioAlCliente } from '../models/servicio-al-cliente.model';

@Component({
  selector: 'app-servicio-cliente',
  templateUrl: './servicio-cliente.component.html',
  styleUrls: ['./servicio-cliente.component.css']
})
export class ServicioClienteComponent {
  servicio: ServicioAlCliente = new ServicioAlCliente();

  constructor(private servicioAlClienteService: ServicioAlClienteService) {}

  registrarServicio(): void {
    this.servicioAlClienteService.createServicio(this.servicio).subscribe(
      response => {
        console.log('Servicio registrado:', response);
        alert('Se registró el servicio al cliente con éxito');
      },
      error => {
        console.error('Error al registrar el servicio al cliente:', error);
        alert('Hubo un error al registrar el servicio al cliente');
      }
    );
  }
}

