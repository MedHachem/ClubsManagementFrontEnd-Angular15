import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent {
  us!:User;
  id!:number;
  constructor(private userservice :UserService,private route: ActivatedRoute,private _router: Router){}
  
  ngOnInit(): void {
 
  
    this.us = new User();

    this.id = this.route.snapshot.params['id'];
    
    this.userservice.getUserById(this.id)
      .subscribe(data => {
        console.log(data)
        this.us = data;
      }, error => console.log(error));
  
}
}
