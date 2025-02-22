export interface ApiResponse<T> {
    data: T;
    meta?: any; // Meta puede contener información adicional como paginación
  }