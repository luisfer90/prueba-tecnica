import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { TicketService } from '../../core/services/ticket.service';
import { Ticket } from '../../core/models/ticket.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-ticket-list',
  standalone: false,
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  tickets: Ticket[] = [];
  dataSource: MatTableDataSource<Ticket>;
  displayedColumns: string[] = ['title', 'status', 'priority', 'actions']; // Columnas que se mostrarán en la tabla

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  @Output() selectTicket = new EventEmitter<Ticket>(); 

  constructor(private ticketService: TicketService, private datePipe: DatePipe) {
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
    this.ticketService.getTickets().subscribe(response => {
      this.tickets = response.data.map((t: any) => ({
        id: t.id,
        title: t.attributes.title,
        description: t.attributes.description,
        status: t.attributes.status,
        priority: t.attributes.priority,
        publishedAt: this.datePipe.transform(t.attributes.publishedAt, 'MM/dd/yyyy HH:mm') // Formateo de fecha
      }));
      this.dataSource.data = this.tickets; // Actualiza la fuente de datos de la tabla
    });
  }

  viewDetails(ticket: Ticket): void {
    this.selectTicket.emit(ticket);
  }
}