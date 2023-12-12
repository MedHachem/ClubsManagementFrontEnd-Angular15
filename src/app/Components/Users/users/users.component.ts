import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users!:any;
  user: User = new User();
  us!:any;
  constructor(private userservice :UserService,private route: ActivatedRoute,private _router: Router){}
  
  ngOnInit(): void {
    this.userservice.getUsers().subscribe(data => {
      this.users = data;
    }
    )
    this.userservice.getUserdetails().subscribe(data => {
      this.us = data;
    }
    )
}
}
