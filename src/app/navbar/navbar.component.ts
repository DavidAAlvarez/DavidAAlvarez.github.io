import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  colorapp = AppComponent.colorapp;
  
  constructor(private router: Router) { }
 
  public ngOnInit(): void {
     this.router.routeReuseStrategy.shouldReuseRoute = () => false;
 }
  
  changeFn(e: any) {
    console.log(e);
    this.colorapp = e;
    AppComponent.colorapp = this.colorapp;
  }
}
