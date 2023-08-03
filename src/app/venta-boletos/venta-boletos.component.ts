import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-venta-boletos',
  templateUrl: './venta-boletos.component.html',
  styleUrls: ['./venta-boletos.component.css'],
})
export class VentaBoletosComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  colorapp = AppComponent.colorapp;
  redondo = false;
  panelColor = new FormControl('red');

  toggleCollapse(num: any): void {
    if (num == 1){
    this.redondo = !this.redondo;
    }
  }

}
