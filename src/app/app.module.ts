import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VentaBoletosComponent } from './venta-boletos/venta-boletos.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AlertModule, CarouselModule, FormModule, GridModule  } from '@coreui/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DatepickerComponent } from './datepicker/datepicker.component';

@NgModule({
    declarations: [
        AppComponent,
        VentaBoletosComponent,
        NavbarComponent,
        CarouselComponent
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
        BrowserAnimationsModule,
        MatDatepickerModule,
        MatFormFieldModule,
        DatepickerComponent
    ]
})
export class AppModule { }
