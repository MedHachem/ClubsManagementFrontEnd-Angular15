import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '@auth0/auth0-angular';
import { Club, ClubService } from 'src/app/Services/club.service';

@Component({
  selector: 'app-clubdetails',
  templateUrl: './clubdetails.component.html',
  styleUrls: ['./clubdetails.component.css']
})
export class ClubdetailsComponent {
  us!:Club;
  id!:number;
  constructor(private userservice :ClubService,private route: ActivatedRoute,private _router: Router){}
  
  ngOnInit(): void {
 
  
 
  this.us = new Club();

    this.id = this.route.snapshot.params['id'];
    
    this.userservice.getClubById(this.id)
      .subscribe(data => {
        console.log(data)
        this.us = data;
      }, error => console.log(error));
  
}
}
