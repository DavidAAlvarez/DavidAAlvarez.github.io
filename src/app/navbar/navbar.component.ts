import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  logo = AppComponent.appColor;
  
    onChange(event: any) {
      console.log(event)
        this.logo = event.target.value;
    }
}
