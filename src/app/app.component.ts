import { Component } from '@angular/core';
import { Ticket } from './core/models/ticket.model';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedTicket: Ticket | null = null;

  // Recibe un Ticket en lugar de solo un ID
  onSelectTicket(ticket: Ticket) {
    this.selectedTicket = ticket;
  }

  refreshTickets() {
    this.selectedTicket = null; // Opcionalmente, resetear el ticket seleccionado
  }
}