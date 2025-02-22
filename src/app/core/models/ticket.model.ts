export interface Ticket {
    id?: number; // Opcional para la creación de nuevos tickets
    title: string;
    description: string;
    status: 'open' | 'in-progress' | 'closed'; // Ejemplo de estados válidos
    priority: 'low' | 'medium' | 'high'; // Definiendo prioridades
    createdAt?: string; // Fecha opcional (generalmente proporcionada por el backend)
    updatedAt?: string; // Fecha opcional
  }