import { Component } from '@angular/core';
import { Ticket } from './core/models/ticket.model';
import { LoadingService } from './core/services/loading.service';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedTicket: Ticket | null = null;

  constructor(private loadingService: LoadingService) {}

  ngOnInit() {
    this.loadingService.showLoading();
  }

  onSelectTicket(ticket: Ticket) {
    this.selectedTicket = ticket;
  }

  refreshTickets() {
    this.selectedTicket = null;
  }
}