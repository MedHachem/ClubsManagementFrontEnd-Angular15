import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Club, ClubService } from 'src/app/Services/club.service';
import { Event, EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent {
  clubs!:any;
  event: Event = new Event();
  constructor(private eventservice :EventService,private clubService:ClubService ,private route: ActivatedRoute,private _router: Router){}

  saveEvent() {
    this.eventservice.saveEvent(this.event).subscribe(
      (      data: any) => {
        console.log('response', data);
       this._router.navigateByUrl("AdminDashboard/events/list");
      }
    )
  }
  ngOnInit(): void {
    this.clubService.getClubs().subscribe(data => {
      this.clubs = data;
    }
    )
  
}


}
