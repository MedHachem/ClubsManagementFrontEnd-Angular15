import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClubService } from 'src/app/Services/club.service';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent {
  clubs!:any;
  
  constructor(private clubservice :ClubService,private route: ActivatedRoute,private _router: Router){}
  
  ngOnInit(): void {
    this.clubservice.getClubs().subscribe(data => {
      this.clubs = data;
    }
    )
  
}
}
