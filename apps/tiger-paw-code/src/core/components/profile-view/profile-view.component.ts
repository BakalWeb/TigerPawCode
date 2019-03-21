import { Component, OnInit, Input } from '@angular/core';
import { ProfileContract } from '@core/models/contracts/profile.contract';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {
  @Input() profile: ProfileContract;

  constructor() { }

  ngOnInit() {
  }

}
