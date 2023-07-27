import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent {
  visible1 = false;
  
  colorapp = AppComponent.colorapp;

  constructor() { }

  toggleCollapse(): void {
    this.visible1 = !this.visible1;
  }
}
