import { Component, OnInit } from '@angular/core';
import { Banner } from '@core/interfaces/banner.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  banner: Banner = {
    image: null,
    heading: 'What is Tiger Paw Code',
    text: 'Find out how this site came to be',
    blogItem: false
  };

  ngOnInit() {}
}
