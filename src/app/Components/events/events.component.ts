import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event, EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  events!:any;
  constructor(private eventservice :EventService,private route: ActivatedRoute,private _router: Router){}
  
  ngOnInit(): void {
    this.eventservice.getEvents().subscribe(data => {
      this.events = data;
    }
    )
  
}
}
