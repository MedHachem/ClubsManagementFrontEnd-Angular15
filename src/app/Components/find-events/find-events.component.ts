import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-find-events',
  templateUrl: './find-events.component.html',
  styleUrls: ['./find-events.component.css']
})
export class FindEventsComponent {
  isShowDiv=false;
  toggleDisplaydiv()
  {
    this.isShowDiv=!this.isShowDiv;
  }
  events!:any;
  constructor(private eventservice :EventService,private route: ActivatedRoute,private _router: Router){}
  
  ngOnInit(): void {
    this.eventservice.getEvents().subscribe(data => {
      this.events = data;
    }
    )
  
}
}
