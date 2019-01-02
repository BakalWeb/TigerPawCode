import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  tab = 'blogs';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  activeTab($event): void {
    this.tab = $event.tab.textLabel;
  }

  create(): void {
    this.router.navigateByUrl(`admin/${this.tab}/create`);
  }

}
