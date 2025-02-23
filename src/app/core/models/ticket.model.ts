export interface Ticket {
    id?: number;
    title: string;
    description: string;
    status: 'Disponible' | 'Preventa' | 'Vendido'; 
    active: boolean;
    archived: boolean;
    createdAt?: string; 
    updatedAt?: string;
    publishedAt?: string;
  }