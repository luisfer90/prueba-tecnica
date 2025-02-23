import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TicketService } from '../../core/services/ticket.service';
import { Ticket } from '../../core/models/ticket.model';

@Component({
  selector: 'app-ticket-form',
  standalone: false,
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent {
  ticket: Ticket = {
    id: 0,
    title: '',
    description: '',
    status: 'open',
    active: true,
    archived: false,
    publishedAt: '',
    createdAt: '',
    updatedAt: ''
  };

  @Output() ticketUpdated = new EventEmitter<Ticket>(); // Evento para emitir el ticket actualizado

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { ticket: Ticket, isEditMode: boolean },
    private dialogRef: MatDialogRef<TicketFormComponent>,
    private ticketService: TicketService
  ) {
    if (data.isEditMode && data.ticket) {
      this.ticket = { ...data.ticket }; // Si estamos editando, cargamos los datos del ticket
    }
  }

  onSubmit(form: any): void {
    console.log(this.ticket)
    if (form.valid) {
      if (this.data.isEditMode) {
        const ticketData = {
          title: this.ticket.title,
          description: this.ticket.description,
          status: this.ticket.status,
          active: this.ticket.active,
          archived: this.ticket.archived
        };
        this.ticketService.updateTicket(this.ticket.id, ticketData).subscribe((updatedTicket: Ticket) => {
          this.ticketUpdated.emit(updatedTicket); // Emitimos el ticket actualizado
          this.dialogRef.close(); // Cerramos el modal
        });
      } else {
        this.ticketService.createTicket(this.ticket).subscribe(() => {
          this.dialogRef.close(); // Cerramos el modal
        });
      }
    }
  }
}