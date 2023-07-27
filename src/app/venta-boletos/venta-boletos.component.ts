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
  colorapp = AppComponent.colorapp;
  panelColor = new FormControl('red');

  constructor(private router: Router) { }
 
  public ngOnInit(): void {
     this.router.routeReuseStrategy.shouldReuseRoute = () => false;
 }
}
