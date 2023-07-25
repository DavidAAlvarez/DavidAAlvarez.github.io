import { Component } from '@angular/core';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent {
  visible1 = false;

  constructor() { }

  toggleCollapse(): void {
    this.visible1 = !this.visible1;
  }
}
