import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-pasajeros',
  templateUrl: './pasajeros.component.html',
  styleUrls: ['./pasajeros.component.css']
})
export class PasajerosComponent {
  visible1 = false;
  visible2 = false;
  visible3 = false;
  visiblea = false;
  
  colorapp = AppComponent.colorapp;
  constructor() { }

  toggleCollapse(num: any): void {
    if (num == 1){
    this.visible1 = !this.visible1;
    }
    else if (num == 2){
    this.visible2 = !this.visible2;
    }
    else if (num == 3){
    this.visible3 = !this.visible3;
    }
    else if (num == 4){
    this.visiblea = !this.visiblea;
    }
  }
}
