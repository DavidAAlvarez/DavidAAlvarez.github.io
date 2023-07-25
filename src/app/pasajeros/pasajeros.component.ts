import { Component } from '@angular/core';

@Component({
  selector: 'app-pasajeros',
  templateUrl: './pasajeros.component.html',
  styleUrls: ['./pasajeros.component.css']
})
export class PasajerosComponent {
  visible1 = false;
  visible2 = false;

  constructor() { }

  toggleCollapse(num: any): void {
    if(num == 1){
    this.visible1 = !this.visible1;
    }
    else{
    this.visible2 = !this.visible2;

    }
  }
}
