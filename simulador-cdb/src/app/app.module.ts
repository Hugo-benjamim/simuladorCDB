import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSliderModule,
  MatSnackBarModule,
  MatTooltipModule
} from '@angular/material';
import { PrincipalComponent } from './principal/principal.component';
import { HomeComponent } from './home/home.component';
import { ROUTES } from './app.routes';
import { SelicComponent } from './selic/selic.component';
import { DolarComponent } from './dolar/dolar.component';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { SimulateComponent } from './simulate/simulate.component';
import { SelicService } from './selic/selic.service';
import { HttpClientModule } from '@angular/common/http';
import { IpcaComponent } from './ipca/ipca.component';
import { IPCAService } from './ipca/ipca.service';
import { DolarService } from './dolar/dolar.service';
registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrincipalComponent,
    HomeComponent,
    SelicComponent,
    DolarComponent,
    SimulateComponent,
    IpcaComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSliderModule,
    MatProgressBarModule,
    MatAutocompleteModule,
    MatInputModule,
    MatGridListModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatListModule,
    MatDialogModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSliderModule,
    MatProgressBarModule,
    MatAutocompleteModule,
    MatInputModule,
    MatGridListModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatListModule,
    MatDialogModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-PT' }, SelicService, IPCAService, DolarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
