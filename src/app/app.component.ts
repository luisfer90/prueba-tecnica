import { Component } from '@angular/core';
import { Ticket } from './core/models/ticket.model';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedTicket: Ticket | null = null;

  onSelectTicket(ticket: Ticket) {
    this.selectedTicket = ticket;
  }

  refreshTickets() {
    this.selectedTicket = null;
  }
}