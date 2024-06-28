import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../services/reserva.service';
import { Reserva } from '../models/reserva.model';

@Component({
  selector: 'app-listar-reserva',
  templateUrl: './listar-reserva.component.html',
  styleUrls: ['./listar-reserva.component.css']
})
export class ListarReservaComponent implements OnInit {
  reservas: Reserva[] = [];

  constructor(private reservaService: ReservaService) {}

  ngOnInit(): void {
    this.reservaService.getReservas().subscribe(data => {
      this.reservas = data;
    });
  }

  deleteReserva(id: number): void {
    this.reservaService.deleteReserva(id).subscribe(() => {
      this.reservas = this.reservas.filter(reserva => reserva.id !== id);
    });
  }
}
