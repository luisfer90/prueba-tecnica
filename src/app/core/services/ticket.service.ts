import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket.model';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private apiUrl = 'https://essential-vacation-6ff9a7193e.strapiapp.com/api/prueba-tecnica-tickets';
  private authToken = '11162822dc1fa78fc809bb1d9cfaad5ba07f8019dc9e6ce36fe05c350086091367d5a16f852442e6b86dc264c8dd79b677d4e60b5968629385bcd875b33f4c4b472a2d533ede15b2b63e87fa7dfa0c7e0bf78ed6d5d0df87622e29538fdee630331e594e45d7c6b7a637d9ac92e8a8e6e32e85bc2964c83a53bebdddd4a6fdd4';

  constructor(private http: HttpClient) {}

  getTickets(): Observable<ApiResponse<Ticket[]>> {
    return this.http.get<ApiResponse<Ticket[]>>(this.apiUrl, {
      headers: { Authorization: `Bearer ${this.authToken}` }
    });
  }

  getTicketById(id: number): Observable<ApiResponse<Ticket>> {
    return this.http.get<ApiResponse<Ticket>>(`${this.apiUrl}/${id}`, {
      headers: { Authorization: `Bearer ${this.authToken}` }
    });
  }

  createTicket(ticketData: Ticket): Observable<ApiResponse<Ticket>> {
    return this.http.post<ApiResponse<Ticket>>(this.apiUrl, { data: ticketData }, {
      headers: { 
        Authorization: `Bearer ${this.authToken}`,
        'Content-Type': 'application/json'
      }
    });
  }

  updateTicket(id: number, ticketData: Ticket): Observable<ApiResponse<Ticket>> {
    return this.http.put<ApiResponse<Ticket>>(`${this.apiUrl}/${id}`, { data: ticketData }, {
      headers: { 
        Authorization: `Bearer ${this.authToken}`,
        'Content-Type': 'application/json'
      }
    });
  }

  deleteTicket(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, {
      headers: { Authorization: `Bearer ${this.authToken}` }
    });
  }
}