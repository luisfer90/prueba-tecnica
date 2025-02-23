import { Component } from '@angular/core';
import { LoadingService } from '../../../core/services/loading.service'; 

@Component({
  selector: 'app-loading',
  standalone: false,
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  isLoading: boolean = false; 

  constructor(private loadingService: LoadingService) {

    this.loadingService.isLoading$.subscribe((loadingState) => {
      this.isLoading = loadingState;
    });
  }
}