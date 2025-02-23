import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

/** Routing Module */
import { AppRoutingModule } from './app-routing.module';

/** Core Components */
import { AppComponent } from './app.component';

/** Feature Modules & Components */
import { TicketListComponent } from './modules/ticket-list/ticket-list.component';
import { TicketDetailComponent } from './modules/ticket-detail/ticket-detail.component';
import { TicketFormComponent } from './modules/ticket-form/ticket-form.component';
import { LoadingComponent } from './modules/_shared/loading/loading.component';

/** Angular Material Modules */
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    TicketDetailComponent,
    TicketFormComponent,
    LoadingComponent
  ],
  imports: [
    /** Core Angular Modules */
    BrowserModule,
    FormsModule,
    AppRoutingModule,

    /** Angular Material Modules */
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule
  ],
  providers: [
    /** Essential Angular Services */
    provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi()),
    DatePipe,
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
