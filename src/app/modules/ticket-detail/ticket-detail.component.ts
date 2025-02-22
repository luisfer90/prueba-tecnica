import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ticket } from '../../core/models/ticket.model';

@Component({
  selector: 'app-ticket-detail',
  standalone: false,
  templateUrl: './ticket-detail.component.html',
  styleUrl: './ticket-detail.component.scss'
})
export class TicketDetailComponent {
  @Input() ticket: Ticket | null = null;
  constructor(@Inject(MAT_DIALOG_DATA) public data: Ticket) {}
}
