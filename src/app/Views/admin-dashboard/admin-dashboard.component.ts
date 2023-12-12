import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit  {
  screenWidth!: number;

  panelOpenState = false;
  board!: string;
  errorMessage!: string;

  constructor(private userService: UserService) { 
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
      this.screenWidth = window.innerWidth;
    };
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 
}
