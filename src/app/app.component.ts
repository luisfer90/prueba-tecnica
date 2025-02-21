import { Component } from '@angular/core';
import { TicketService } from './core/ticket.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private ticketService: TicketService ) {
    
  }
  ngOnInit() {
    this.ticketService.getTickets().subscribe(response => {
      console.log(response);
    });
  }
}
