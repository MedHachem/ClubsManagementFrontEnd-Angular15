import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event, EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-eventdetails',
  templateUrl: './eventdetails.component.html',
  styleUrls: ['./eventdetails.component.css']
})
export class EventdetailsComponent {
  us!:Event;
  id!:number;
  constructor(private userservice :EventService,private route: ActivatedRoute,private _router: Router){}
  
  ngOnInit(): void {
 
  
 
  this.us = new Event();

    this.id = this.route.snapshot.params['id'];
    
    this.userservice.getEventById(this.id)
      .subscribe(data => {
        console.log(data)
        this.us = data;
      }, error => console.log(error));
  
}
}
