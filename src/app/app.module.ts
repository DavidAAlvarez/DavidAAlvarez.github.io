import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VentaBoletosComponent } from './venta-boletos/venta-boletos.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AlertModule, CarouselModule, CollapseModule, FormModule, GridModule  } from '@coreui/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { MatSelectModule } from '@angular/material/select';
import { RutasComponent } from './rutas/rutas.component';
import { AsientosComponent } from './asientos/asientos.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { PasajerosComponent } from './pasajeros/pasajeros.component';
import { PagoComponent } from './pago/pago.component';
import { ConfirmaComponent } from './confirma/confirma.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
    declarations: [
        AppComponent,
        VentaBoletosComponent,
        NavbarComponent,
        CarouselComponent,
        RutasComponent,
        AsientosComponent,
        PasajerosComponent,
        PagoComponent,
        ConfirmaComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        FormsModule,
        [AlertModule],
        [CarouselModule],
        [FormModule],
        [GridModule],
        [CollapseModule],
        BrowserAnimationsModule,
        MatFormFieldModule,
        DatepickerComponent,
        ReactiveFormsModule,
        [MatDatepickerModule],
        [MatSelectModule],
        [MatProgressBarModule],
        [MatFormFieldModule], 
        [MatInputModule], 
        [MatNativeDateModule],
        [MatButtonModule]
    ]
})
export class AppModule { }
