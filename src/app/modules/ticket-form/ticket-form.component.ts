import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TicketService } from '../../core/services/ticket.service';
import { Ticket } from '../../core/models/ticket.model';

@Component({
  selector: 'app-ticket-form',
  standalone: false,
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss']
})
export class TicketFormComponent {
  ticket: Ticket = {
    id: 0,
    title: '',
    description: '',
    status: 'Disponible',
    active: true,
    archived: false,
    publishedAt: '',
    createdAt: '',
    updatedAt: ''
  };

  @Output() ticketUpdated = new EventEmitter<void>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { ticket: Ticket, isEditMode: boolean },
    private dialogRef: MatDialogRef<TicketFormComponent>,
    private ticketService: TicketService
  ) {
    if (data.isEditMode && data.ticket) {
      this.ticket = { ...data.ticket }; // If we are editing, we load the ticket data
    }
  }

  onSubmit(form: any): void {
    if (form.valid) {
      const ticketData = {
        title: this.ticket.title,
        description: this.ticket.description,
        status: this.ticket.status,
        active: this.ticket.active,
        archived: this.ticket.archived
      }
      if (this.data.isEditMode) {
        if (this.ticket.id != undefined) {
          this.ticketService.updateTicket(this.ticket.id, ticketData).subscribe(() => {
            this.ticketUpdated.emit();
            this.dialogRef.close();
          });
        }
      } else {

        this.ticketService.createTicket(ticketData).subscribe(() => {
          this.ticketUpdated.emit();
          this.dialogRef.close();
        });
      }
    }
  }
}