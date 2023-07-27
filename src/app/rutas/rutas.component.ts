import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent {
  visible1 = false;
  colorapp = AppComponent.colorapp;

  toggleCollapse(num: any): void {
    if (num == 1){
    this.visible1 = !this.visible1;
    }
  }
}
