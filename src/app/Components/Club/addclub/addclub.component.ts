import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Club, ClubService } from 'src/app/Services/club.service';

@Component({
  selector: 'app-addclub',
  templateUrl: './addclub.component.html',
  styleUrls: ['./addclub.component.css']
})
export class AddclubComponent {
  user: Club = new Club();
  constructor(private userservice :ClubService,private route: ActivatedRoute,private _router: Router){}
  saveClub() {
    this.userservice.saveClub(this.user).subscribe(
      (      data: any) => {
        console.log('response', data);
        this._router.navigateByUrl("/AdminDashboard/OverviewAdmin");
      }
    )
  }
}
