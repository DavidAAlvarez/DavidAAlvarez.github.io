import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-venta-boletos',
  templateUrl: './venta-boletos.component.html',
  styleUrls: ['./venta-boletos.component.css'],
})
export class VentaBoletosComponent {
  public date = new Date();
}
