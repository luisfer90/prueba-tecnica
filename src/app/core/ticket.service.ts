import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private apiUrl = 'https://essential-vacation-6ff9a7193e.strapiapp.com/api/prueba-tecnica-tickets';
  private authToken = '11162822dc1fa78fc809bb1d9cfaad5ba07f8019dc9e6ce36fe05c350086091367d5a16f852442e6b86dc264c8dd79b677d4e60b5968629385bcd875b33f4c4b472a2d533ede15b2b63e87fa7dfa0c7e0bf78ed6d5d0df87622e29538fdee630331e594e45d7c6b7a637d9ac92e8a8e6e32e85bc2964c83a53bebdddd4a6fdd4';

  constructor(private http: HttpClient) {}

  /**
   * Retrieves all tickets from the API.
   * @returns An Observable containing the list of tickets.
   */
  getTickets(): Observable<any> {
    return this.http.get<any>(this.apiUrl, {
      headers: { Authorization: `Bearer ${this.authToken}` }
    });
  }

  /**
   * Retrieves a single ticket by its ID.
   * @param id - The ID of the ticket to retrieve.
   * @returns An Observable containing the ticket details.
   */
  getTicketById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`, {
      headers: { Authorization: `Bearer ${this.authToken}` }
    });
  }

  /**
   * Creates a new ticket.
   * @param ticketData - The data of the ticket to create.
   * @returns An Observable containing the created ticket response.
   */
  createTicket(ticketData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, { data: ticketData }, {
      headers: { 
        Authorization: `Bearer ${this.authToken}`,
        'Content-Type': 'application/json'
      }
    });
  }

  /**
   * Updates an existing ticket by its ID.
   * @param id - The ID of the ticket to update.
   * @param ticketData - The updated data for the ticket.
   * @returns An Observable containing the updated ticket response.
   */
  updateTicket(id: number, ticketData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, { data: ticketData }, {
      headers: { 
        Authorization: `Bearer ${this.authToken}`,
        'Content-Type': 'application/json'
      }
    });
  }

  /**
   * Deletes a ticket by its ID.
   * @param id - The ID of the ticket to delete.
   * @returns An Observable confirming the deletion.
   */
  deleteTicket(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`, {
      headers: { Authorization: `Bearer ${this.authToken}` }
    });
  }
}