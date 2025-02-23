export interface Ticket {
    title: string;
    description: string;
    status: 'open' | 'in-progress' | 'closed'; 
    active: boolean;
    archived: boolean;
    createdAt: string; 
    updatedAt: string;
    publishedAt: string;
  }