import { Component, OnInit, Input } from '@angular/core';
import { Banner } from '@core/interfaces/banner.interface';
import { ImageAssets } from '@core/static/image-assets';

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
  private images = ImageAssets;
  @Input() banner: Banner;

  constructor() {}

  ngOnInit() {
    this.banner.image = (!this.banner.image) ? this.returnRandomImage() : this.banner.image;
  }

  returnRandomImage(): string {
    const item = this.images[Math.floor(Math.random() * this.images.length)];
    return item;
  }
}
