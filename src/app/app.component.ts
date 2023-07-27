import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public static colorapp: string = "basic";
  title = 'Autobuses-App';
  constructor(private router: Router) { }
 
  public ngOnInit(): void {
     this.router.routeReuseStrategy.shouldReuseRoute = () => false;
 }
}

