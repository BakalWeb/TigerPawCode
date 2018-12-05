import { Component} from '@angular/core';
import { MenuItems } from '@core/static/menu';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NotificationService } from '@core/services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuItems = MenuItems;
  currentLocation: string; // used as page name

  constructor(private router: Router, private location: Location,
    private notification: NotificationService) {
    this.router.events.subscribe(event => {
      this.currentLocation = this.location.path().replace('/', '');
     });
  }
}
