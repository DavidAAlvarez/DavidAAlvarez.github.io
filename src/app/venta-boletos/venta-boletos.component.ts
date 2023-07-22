import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  standalone: false,
  selector: 'app-venta-boletos',
  templateUrl: './venta-boletos.component.html',
  styleUrls: ['./venta-boletos.component.css'],
})
export class VentaBoletosComponent {
  panelColor = new FormControl('red');
}
