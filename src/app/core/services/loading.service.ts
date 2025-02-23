import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false); // Inicializa con 'false'
  isLoading$ = this.loadingSubject.asObservable(); // Observable para el componente

  constructor() {}

  // Método para activar el loading
  showLoading() {
    this.loadingSubject.next(true);
  }

  // Método para desactivar el loading
  hideLoading() {
    this.loadingSubject.next(false);
  }
}