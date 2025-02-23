import { Component } from '@angular/core';
import { LoadingService } from '../../../core/services/loading.service'; // Asegúrate de importar el servicio

@Component({
  selector: 'app-loading',
  standalone: false,
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  isLoading: boolean = false; // Define la propiedad isLoading

  constructor(private loadingService: LoadingService) {
    // Suscríbete al servicio para controlar el estado de carga
    this.loadingService.isLoading$.subscribe((loadingState) => {
      this.isLoading = loadingState; // Actualiza isLoading según el valor emitido por el servicio
    });
  }
}