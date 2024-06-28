import { Component } from '@angular/core';
import { ReservaService } from '../services/reserva.service';
import { Reserva } from '../models/reserva.model';

@Component({
  selector: 'app-registrar-reserva',
  templateUrl: './registrar-reserva.component.html',
  styleUrls: ['./registrar-reserva.component.css']
})
export class RegistrarReservaComponent {
  reserva: Reserva = new Reserva();

  constructor(private reservaService: ReservaService) { }

  registrarReserva(): void {
    this.reservaService.createReserva(this.reserva).subscribe(
      response => {
        console.log('Reserva registrada:', response);
        alert('Se registró la reserva con éxito');
        // Aquí puedes añadir la lógica adicional después de registrar la reserva
      },
      error => {
        console.error('Error al registrar la reserva:', error);
        alert('Hubo un error al registrar la reserva');
      }
    );
  }
}

