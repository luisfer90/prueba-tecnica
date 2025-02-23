import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TicketService } from '../../core/services/ticket.service';
import { Ticket } from '../../core/models/ticket.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DatePipe } from '@angular/common';
import { TicketDetailComponent } from '../ticket-detail/ticket-detail.component';
import { TicketFormComponent } from '../ticket-form/ticket-form.component';
import { LoadingService } from '../../core/services/loading.service';

@Component({
  selector: 'app-ticket-list',
  standalone: false,
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {
  tickets: Ticket[] = [];
  dataSource: MatTableDataSource<Ticket>;
  displayedColumns: string[] = ['title', 'status', 'publishedAt', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(
    private ticketService: TicketService,
    private datePipe: DatePipe,
    private dialog: MatDialog,
    private loadingService: LoadingService
  ) {
    this.dataSource = new MatTableDataSource(this.tickets);
  }

  ngOnInit(): void {
    this.loadTickets();
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  loadTickets(): void {
    this.loadingService.showLoading();
  
    this.ticketService.getTickets().subscribe(
      response => {
        this.tickets = response.data.map((t: any) => ({
          id: t.id,
          title: t.attributes.title,
          description: t.attributes.description,
          status: t.attributes.status,
          active: t.attributes.active,
          archived: t.attributes.archived,
          createdAt: this.datePipe.transform(t.attributes.createdAt, 'dd/MM/yyyy HH:mm') || '',
          updatedAt: this.datePipe.transform(t.attributes.updatedAt, 'dd/MM/yyyy HH:mm') || '',
          publishedAt: this.datePipe.transform(t.attributes.publishedAt, 'dd/MM/yyyy HH:mm') || ''
        }));
  
        // Save the tickets in the dataSource of the table
        this.dataSource.data = this.tickets;
      },
      error => {
        console.error('Error al cargar los tickets:', error);
        alert('Ocurrió un error al cargar los tickets. Inténtalo de nuevo.');
      },
      () => {
        // In any case, whether success or failure, we hide the loading
        this.loadingService.hideLoading();
      }
    );
  }

  viewDetails(ticket: Ticket): void {
    this.dialog.open(TicketDetailComponent, {
      width: '400px',
      data: ticket
    });
  }

  editTicket(ticket: Ticket): void {
    const dialogRef = this.dialog.open(TicketFormComponent, {
      width: '500px',
      data: { ticket, isEditMode: true }
    });

    // When the 'ticketUpdated' event is emitted, we reload the ticket list
    dialogRef.componentInstance.ticketUpdated.subscribe(() => {
      this.loadTickets();
    });
  }

  createTicket(): void {
    const dialogRef = this.dialog.open(TicketFormComponent, {
      width: '500px',
      data: { isEditMode: false }
    });

    // We reload the ticket list when a new ticket is created
    dialogRef.componentInstance.ticketUpdated.subscribe(() => {
      this.loadTickets();
    });
  }
}