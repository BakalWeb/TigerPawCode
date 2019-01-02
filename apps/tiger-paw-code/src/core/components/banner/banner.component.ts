import { Component, OnInit, Input } from '@angular/core';
import { Banner } from '@core/interfaces/banner.interface';

@Component({
  selector: 'app-banner',
  template: `
    <div class="container-fluid banner-wrapper" *ngIf="banner">
        <div
          class="banner img-fluid"
          [style.background-image]="'url(assets/images/' + banner.image + ')'"
        >
        <div class="container">
        <h2>{{ banner.heading }}</h2>
        <p>{{ banner.text }}</p>
      </div>
      </div>
    </div>
  `,
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() banner: Banner;
  constructor() {}

  ngOnInit() {
  }
}
