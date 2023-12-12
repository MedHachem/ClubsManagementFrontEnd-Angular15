import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Club } from 'src/app/Services/club.service';
import { Event, EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-updatevent',
  templateUrl: './updatevent.component.html',
  styleUrls: ['./updatevent.component.css']
})
export class UpdateventComponent {
  id!: number;
  club!: Event;

  constructor(private route: ActivatedRoute,private router: Router,
    private userService: EventService) { }

  ngOnInit() {
    this.club = new Event();

    this.id = this.route.snapshot.params['id'];
    
    this.userService.getEventById(this.id)
      .subscribe(data => {
        console.log(data)
        this.club = data;
      }, error => console.log(error));
  }

  updateUser() {
    this.userService.updateEvent(this.id, this.club)
      .subscribe(data => {
        console.log(data);
        this.club = new Event();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateUser();    
  }

  gotoList() {
    this.router.navigate(['/ClubDashboard/events/list']);
  }
}
