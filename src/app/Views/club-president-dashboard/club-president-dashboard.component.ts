import { Component } from '@angular/core';

@Component({
  selector: 'app-club-president-dashboard',
  templateUrl: './club-president-dashboard.component.html',
  styleUrls: ['./club-president-dashboard.component.css']
})
export class ClubPresidentDashboardComponent {
  screenWidth: number;
  constructor() {
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
      this.screenWidth = window.innerWidth;
    };
  }
  panelOpenState = false;
}
