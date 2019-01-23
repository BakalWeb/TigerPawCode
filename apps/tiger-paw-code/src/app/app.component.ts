import { Component, ViewChild, HostListener, AfterViewInit} from '@angular/core';
import { MenuItems } from '@core/static/menu';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NotificationService } from '@core/services/notification.service';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuItems = MenuItems;
  menuIcon = 'more_vert';
  currentLocation: string; // used as page name
  @ViewChild('sidenav') sidenav: MatSidenav;

  // shrinking header
  headerClass = 'header-normal';

  constructor(private router: Router, private location: Location,
    private notification: NotificationService) {
    this.router.events.subscribe(event => {
      this.currentLocation = this.location.path().replace('/', '') === 'home' ? 'Tiger Paw Code' : this.location.path().replace('/', '');
     });
  }

  sidenavToggle(): void {
    this.sidenav.toggle();
  }

  shrinkHeader(event) {
    const shrinkHeaderAtValue = 40;
    if (event > shrinkHeaderAtValue) {
     this.headerClass = 'header-shrink';
     return;
    }

    this.headerClass = 'header-normal';
  }
}
